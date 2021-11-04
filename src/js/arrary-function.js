/* eslint-disable no-extend-native */
/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 02:04:50
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 15:46:39
 * FilePath     : /js-base/src/js/arrary-function.js
 * description  : 数组方法forEach、filter map reduce some every 实现原理
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */
// forEach实现

Array.prototype.myForEach = function (fn, thisArgs) {
  if (typeof fn !== 'function') throw 'Error in params'
  const len = this.length // 在遍历的开始就确定遍历次数 对元素增删改查不会影响遍历次数
  //  遍历使用回调 传递参数
  for (let i = 0; i < len; i++) {
    fn.call(thisArgs, this[i], i, this)
  }
}

// 使用
const oldArr = [1, 2, 3, 4, 5]

oldArr.myForEach((item, index, arr) => {
  console.log('myForEach', item, index, arr)
})

// filter实现
Array.prototype.myFilter = function (callBack) {
  const newArr = []
  // 1. 循环
  for (let i = 0; i < this.length; i++) {
    const item = this[i]
    // 2. 执行回调 满足条件 添加它
    if (callBack(item)) {
      newArr.push(item)
    }
  }
  return newArr // 3. 返回新数组
}

// 使用
const oldFilterArr = [1, 2, 3, 4, 5]

const filterNewArr = oldFilterArr.myFilter((item) => item <= 3) // 过滤3以及3以下

console.log('filter 重写', filterNewArr)

// map实现
Array.prototype.myMap = function (callBack) {
  const newArr = []
  // 1. 循环
  for (let i = 0; i < this.length; i++) {
    // 2. 执行回调 添加回调的返回值
    const newItem = callBack(this[i])
    newArr.push(newItem)
  }
  return newArr // 3. 返回新数组
}

const oldMapArr = [1, 2, 3, 4, 5]

const newMapArr = oldMapArr.myMap((item) => `${item}元素处理`)

console.log('map 重写', newMapArr)

// reduce 实现原理
Array.prototype.myReduce = function (callBack, pre) {
  // 1. 循环
  for (let i = 0; i < this.length; i++) {
    if (pre !== undefined) {
      // 2. 传入已有的pre 与 当前循环值 赋值到pre上
      pre = callBack(pre, this[i], i, this)
    } else {
      // 3. 如果没传入pre 将数组当前项当做pre传入 并增加指针
      pre = callBack(this[i], this[i + 1], i, this)
      i++
    }
  }
  return pre // 4. 返回pre
}

const oldReduce = [1, 2, 3, 4, 5]

const reduceRes = oldReduce.myReduce((prev, curr, index) => prev + curr, 0)

console.log('reduce 重写', reduceRes)

// some 实现原理
Array.prototype.mySome = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (callBack(this[i])) {
      return true // 有一个元素符合要求 即成
    }
  }
  return false
}

const oldSome = [1, 2, 3, 4, 5]
// 如果有一个值大于4 则返回true
const someIsTrue = oldSome.mySome((item) => item > 4)

console.log('some 重写', someIsTrue)

// every 实现原理
Array.prototype.myEvery = function (callBack) {
  for (let i = 0; i < this.length; i++) {
    if (!callBack(this[i])) {
      return false // 有一个元素错误即失败
    }
  }
  return true
}

const everyArr = [1, 2, 3, 4, 5]

const everyIsTrue = everyArr.myEvery((item) => item > 0)

console.log('every 重写', everyIsTrue)
