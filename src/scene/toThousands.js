/*
 * Author       : OBKoro1
 * Date         : 2021-09-10 17:04:06
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 16:00:04
 * FilePath     : /js-base/src/scene/toThousands.js
 * description  : 数字千分位处理
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

const oldNum = 13333111122.22

// 正则
function toThousands1(num) {
  // 至少三位数
  num = parseFloat(num.toFixed(3))
  // 小数点处理
  let [integer, decimal] = String.prototype.split.call(num, '.')
  // 仅当前面有一个数字或者两个数字 后面跟着三个数字 才匹配 +表示匹配3个数字多次
  // $&表示用于匹配的字符串
  integer = integer.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,')
  return `${integer}${decimal ? `.${decimal}` : ''}`
}

// 数字千分位处理
function toThousands2(num) {
  // 小数点
  let [integer, decimal] = String.prototype.split.call(num, '.')
  const s = String(integer) // 数字一般都转字符操作
  const arr = []
  let j = 0 // 匹配当前循环的数字 是不是3的倍数
  // 倒序拼接
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i])
    j++
    // 如果是3的倍数  并且前面还有数字的话 加一个,
    if (j % 3 === 0 && i !== 0) {
      arr.push(',')
    }
  }
  // 颠倒数组 转字符串
  integer = arr.reverse().join('')
  // 小数点
  if (decimal) {
    integer = `${integer}.${decimal}`
  }

  return integer
}

console.log(toThousands1(oldNum))
console.log(toThousands2(oldNum))
