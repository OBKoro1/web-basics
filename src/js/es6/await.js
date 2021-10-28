/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 02:04:03
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-12 23:45:13
 * FilePath     : /js-base/src/es6/await.js
 * description  : await 实现原理: Promise递归自动执行generator函数
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 看懂generator执行
// 1. 获取迭代器
// 2. 不断执行g.next
// 3. 直到done为true

function* myGenerator() {
  let params1 = yield '1'
  let params2 = yield '2'
  let params3 = yield '3'
  console.log('params1', params1, params2, params3)
  return 'last'
}

// 获取迭代器
const gen = myGenerator()

let d = gen.next() // { value: '1', done: false }
let d1 = gen.next('test1') // { value: '2', done: false }
let d2 = gen.next('test2') // { value: '3', done: false }
let d3 = gen.next('test3') // { value: 'last', done: true }

console.log(d, d1, d2, d3)

// await 实现原理: 自动执行generator函数
function run(gen) {
  return new Promise((resolve, reject) => {
    var g = gen() // 获取迭代器 每次执行next 都会更新迭代器。
    // 递归执行迭代器 利用promise异步暂停执行
    function step(val) {
      let res = null
      try {
        res = g.next(val) // 执行下一次迭代 获取await结果
      } catch (err) {
        return reject(err)
      }
      // 判断迭代器结束 递归终止 返回await整体的resolve结果
      if (res.done) {
        resolve(res.value)
        return
      }
      // 等待Promise完成就自动执行下一个next，并传入resolve的值
      Promise.resolve(res.value)
        .then((val) => {
          step(val) 
        })
        .catch((err) => {
          g.throw(err)
        })
    }
    step() //第一次执行
  })
}

// 测试代码

function* testGeneratorAwait() {
  try {
    const res = yield Promise.resolve(1)
    const res2 = yield 2
    const res3 = yield Promise.resolve(3)
    console.log(res, res2, res3) // 1 2 3
    return 4
  } catch (error) {
    console.log('失败回调', error)
  }
}

console.log('测试代码')
run(testGeneratorAwait)
  .then((res) => {
    console.log('await 执行完毕', res)
  })
  .catch((err) => {
    console.log('await 报错')
  })
