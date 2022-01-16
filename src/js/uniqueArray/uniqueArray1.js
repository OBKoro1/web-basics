/*
 * Author       : OBKoro1
 * Date         : 2021-09-13 13:09:24
 * LastEditors  : OBKoro1
 * LastEditTime : 2022-01-16 14:46:40
 * FilePath     : /js-base/src/js/常见场景/数组基本类型去重.js
 * description  : 数组基本类型去重
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

const a = { test: 1 }
const oldArr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 'NaN', 0, 0, 'a', 'a', {}, {}, a, a]

// ES6基本类型去重
function unique(arr) {
  return Array.from(new Set(arr))
}
// 基本类型 推荐采用这种方式 简单明了
console.log('es6 set', unique(oldArr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]

// includes
function unique3(arr) {
  if (!Array.isArray(arr)) return
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i])
    }
  }
  return array
}
// NaN识别出来了，对象也没去重，正解
console.log('includes', unique3(oldArr))
// [1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}, { test: 1 }]

// indexOf
function unique2(arr) {
  if (!Array.isArray(arr)) return
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array
}

// 缺点：无法识别NaN
console.log('indexOf', unique2(oldArr))
// // [1, "true", true, 15, false, undefined, null, NaN, NaN, "NaN", 0, "a", {}, {}, { test: 1 }]
