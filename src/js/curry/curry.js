/*
 * Author       : OBKoro1
 * Date         : 2021-07-30 15:03:35
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-11 17:44:22
 * FilePath     : /js-base/src/js/curry.js
 * description  : 函数柯里化
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

// 思路: 比较函数参数，不足返回函数等待接收参数，够了就执行
function curry(fn, ...args) {
  //  比较参数
  if (args.length < fn.length) {
    //  返回函数 等待接收参数
    return function (...args2) {
      return curry(fn, ...args, ...args2)
    }
  }
  //  函数参数够了 执行该函数返回结果
  return fn.apply(this, args)
}

// 使用
function sum(a, b, c, d) {
  return a + b + c + d
}
const curriedSum = curry(sum, 1) // 保存函数和参数
const res = curriedSum(2) // 保存第2个参数与sum函数
const res2 = res(3) // 保存第3个参数
// 传进第四个参数 参数足够了 执行函数 返回执行结果 不能再传递参数了
const res3 = res2(4)
console.log('res', curriedSum, res, res2, res3)
