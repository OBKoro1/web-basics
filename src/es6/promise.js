/*
 * Author       : OBKoro1
 * Date         : 2021-07-30 15:45:28
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-11 17:37:42
 * FilePath     : /js-base/src/es6/promise.js
 * description  : 完整实现promise
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */
// https://cloud.tencent.com/developer/article/1604360

//Promise/A+规范的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(promiseCallBack) {
    this._resolveQueue = [] // then收集的执行成功的回调队列 .then可以调用多次
    this._rejectQueue = [] // then收集的执行失败的回调队列
    this._status = PENDING     // Promise状态
    this._value = undefined    // 储存then回调return的值
    // 由于resolve/reject是在promiseCallBack内部被调用
    // 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      const run = () => {
        // 状态只能由pending到fulfilled或rejected
        if (this._status !== PENDING) return 
        this._status = FULFILLED
        this._value = val
        // "then 方法可以被同一个 promise 调用多次"
        while (this._resolveQueue.length) {
          // .then、.reject注册的回调只能被执行一次
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run) // 同步代码也要加上异步
    }
    // 实现同resolve
    let _reject = (val) => {
      const run = () => {
        // 状态只能由pending到fulfilled或rejected
        if (this._status !== PENDING) return
        this._status = REJECTED
        while (this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // new Promise()时立即执行promiseCallBack,并传入resolve和reject
    promiseCallBack(_resolve, _reject)
  }

  // 这是链式调用原理
  // 1. then返回一个新的promise 
  // 2. 执行then回调 获取返回值 这个返回值用于新的promise
  // 3. 如果是Promise,那么等待Promise状态变更 传进resolve,否则返回resolve
  then(resolveFn, rejectFn) {
    return new MyPromise((resolve, reject) => {
      //包装回调成函数
      if(typeof resolveFn !== 'function')  resolveFn = (value) => value
      if(typeof rejectFn !== 'function')  rejectFn = (error) => error

      // 获取异步回调返回值 如果是Promise,那么等待Promise状态变更,否则直接resolve
      const fulfilledFn = (value) => {
        // 捕获执行错误
        try {
          //执行异步 并获取返回值
          let x = resolveFn(value)
          // 如果是Promise,那么等待Promise状态变更,否则返回resolve
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      const rejectedFn = (error) => {
        try {
          let x = rejectFn(error)
          x instanceof MyPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
      // 根据状态执行操作
      switch (this._status) {
        // 等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break
        // 直接执行then回调  
        case FULFILLED:
          fulfilledFn(this._value) // this._value是constructor期间执行的值
          break
        // 直接执行catch回调
        case REJECTED:
          rejectedFn(this._value)
          break
      }
    })
  }
  //静态的resolve方法 用于快速声明一个promise
  static resolve(value) {
    if (value instanceof MyPromise) return value // 根据规范, 如果参数是Promise实例, 直接return这个实例
    return new MyPromise((resolve) => resolve(value)) // 立即执行promise
  }

  //静态的reject方法
  static reject(reason) {
    // 将promise改为reject
    return new MyPromise((resolve, reject) => reject(reason))
  }
  // 异步失败回调 在异步后面链接一个错误的回调 失败了即执行错误回调
  catch(rejectFn) {
    return this.then(undefined, rejectFn)
  }
  // 将回调传入.then和catch的resolveFn中 状态改变后 执行回调
  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value), 
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason
        }) // reject同理
    )
  }
  // 全部完成才是完成 一个失败即失败
  //  一般会考用promise手写实现promise.all
  all(promiseArr) {
    return new MyPromise((resolve, reject) => {
      let resArr = []
      let count = 0
      for (let [index, element] of promiseArr.entries()) {
        // Promise.resolve(element)用于处理传入值不为Promise的情况
        MyPromise.resolve(element)
          .then((res) => {
            count++
            resArr[index] = res
            if (count === promiseArr.length) {
              resolve(resArr)
            }
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }
  // 竞态promise 一个出现状态即为最终状态
  //  这个可能也会考
  race(promiseArr) {
    return new MyPromise((resolve, reject) => {
      for (let element of promiseArr.values()) {
        MyPromise.resolve(element)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => {
            reject(err)
          })
      }
    })
  }
}

// 使用方法

const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500)
})

p1.then((res) => {
  console.log('p1', res)
  return 2
})
  .then((res) => {
    console.log('3', res)
    return 3
  })
  .then((res) => {
    console.log( '4' ,res)
  })
