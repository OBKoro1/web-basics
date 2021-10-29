/*
 * Author       : OBKoro1
 * Date         : 2021-10-29 16:12:55
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-29 16:16:43
 * FilePath     : /js-base/src/scene/flattenObj.js
 * description  : 对象扁平化
 * 阿里面试题 第三题
 * 地址： alibaba.202110.js
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */


/**
 * 对象扁平化
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null,
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */

 var input = {
    a: 1,
    b: [1, 2, { c: true }, [3]],
    d: { e: 2, f: 3 },
    g: null,
}
let flattenRes = flatten(input)
console.log('flattenRes', flattenRes)
// 对象扁平化

function flattenObj(obj) {
}












// 答案慎看
// 答案慎看
// 答案慎看





















// function flattenObj(obj) {
//     let res = {}
//     // 对一个对象扁平化
//     const help = (target, oldKey) => {
//         for (let key in target) {
//             let newKey; // 判断老的key
//             if (oldKey) {
//                 // 递归有老key 则组合起来
//                 if (Array.isArray(target)) {
//                     // 数组变为 老key[0]
//                     newKey = `${oldKey}[${key}]`
//                 } else {
//                     // 对象： 老key.a
//                     newKey = `${oldKey}.${key}`
//                 }
//             } else {
//                 // 初始化情况下
//                 if (Array.isArray(target)) {
//                     // 数组变为 [0] [1]
//                     newKey = `[${key}]`
//                 } else {
//                     // 对象变为 'a' 'b'
//                     newKey = key
//                 }
//             }
//             if (Object.prototype.toString.call(target[key]) === '[object Object]' || Array.isArray(target[key])) {
//                 // 递归数组和对象 传进组织好的老key
//                 help(target[key], newKey)
//             } else if (target[key] !== null && target[key] !== undefined) {
//                 // 递归出口 常规数据 直接赋值
//                 res[newKey] = target[key]
//             }
//         }
//     }
//     help(obj, '')
//     return res
// }