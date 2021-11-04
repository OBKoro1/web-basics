/*
 * Author       : OBKoro1
 * Date         : 2021-09-17 21:06:19
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-17 21:06:21
 * FilePath     : /js-base/src/scene/numAdd.js
 * description  : 如何通过代码解决浮点数计算不准的问题以及浮点数不准的原因。
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

// 思路：小数转整数来操作
function add(...args) {
  // 最小的小数有几位
  const maxLen = Math.max.apply(
    null,
    args.map((item) => {
      const str = String(item).split('.')[1]
      return str ? str.length : 0
    }),
  )
  // 最小小数 转成整数 需要的倍数
  const baseMultiple = 10 ** maxLen
  return (
  // 小数乘以倍数 再除以倍数 还原小数点
    args.reduce((sum, cur) => sum + cur * baseMultiple, 0) / baseMultiple
  )
}
console.log(add(0.1, 0.2)) // => 0.3
console.log(add(10, 11)) // => 21
console.log(add(0.001, 0.003)) // => 0.004
console.log(add(0.001, 0.003, 0.005)) // => 0.009
console.log(add(0.001)) // => 0.001

// 原因
// 不仅 JavaScript，所有遵循 IEEE 754 规范的语言都是如此；
// 在JavaScript中，所有的Number都是以64-bit的双精度浮点数存储的；
// 双精度的浮点数在这64位上划分为3段，而这3段也就确定了一个浮点数的值，64bit的划分是“1-11-52”的模式，具体来说：
//  1.就是1位最高位（最左边那一位）表示符号位，0表示正，1表示负；
//  2.11位表示指数部分；
//  3.52位表示尾数部分，也就是有效域部分
