/*
 * Author       : OBKoro1
 * Date         : 2021-10-28 17:34:00
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 15:49:37
 * FilePath     : /js-base/src/interview/alibaba.202110.js
 * description  : 阿里面试题 一个小时
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

// 提示：本题是leetcode 困难题
/**
 * 根据表达式计算字母数
 * 说明：
 *   给定一个描述字母数量的表达式，计算表达式里的每个字母实际数量
 *   表达式格式：
 *     字母紧跟表示次数的数字，如 A2B3
 *     括号可将表达式局部分组后跟上数字，(A2)2B
 *     数字为1时可缺省，如 AB3。
 * 示例：
 *   countOfLetters('A2B3'); // { A: 2, B: 3 }
 *   countOfLetters('A(A3B)2'); // { A: 7, B: 2 }
 *   countOfLetters('C4(A(A3B)2)2'); // { A: 14, B: 4, C: 4 }
 */
// 栈+哈希表
function countOfAtoms(formula) {

}
console.log(countOfAtoms('A2B3')) // { A: 2, B: 3 }
console.log(countOfAtoms('A(A3B)2')) // { A: 7, B: 2 }
console.log(countOfAtoms('C4(A(A3B)2)2')) // { A: 14, B: 4, C: 4 }

/**
 * 实现一个`Foo`方法，接受函数`func`和时间`wait`
 * 返回一个新函数，新函数即时连续多次执行，但也只限制在`wait`的时间执行一次
 */

function Foo(func, wait, ...params) {
}

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

const input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
}
const flattenRes = flatten(input)
console.log('flattenRes', flattenRes)
// 对象扁平化
function flatten(obj) {
  const res = {}
  // 对一个对象扁平化
  const help = (target, oldKey) => {
    for (const key in target) {
      let newKey // 判断老的key
      if (oldKey) {
        // 递归有老key 则组合起来
        if (Array.isArray(target)) {
          // 数组变为 老key[0]
          newKey = `${oldKey}[${key}]`
        } else {
          // 对象： 老key.a
          newKey = `${oldKey}.${key}`
        }
      } else {
        // 初始化情况下
        if (Array.isArray(target)) {
          // 数组变为 [0] [1]
          newKey = `[${key}]`
        } else {
          // 对象变为 'a' 'b'
          newKey = key
        }
      }
      if (Object.prototype.toString.call(target[key]) === '[object Object]' || Array.isArray(target[key])) {
        // 递归数组和对象 传进组织好的老key
        help(target[key], newKey)
      } else if (target[key] !== null && target[key] !== undefined) {
        // 递归出口 常规数据 直接赋值
        res[newKey] = target[key]
      }
    }
  }
  help(obj, '')
  return res
}













// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看















// 726题
// function countOfAtoms(formula) {
//     let i = 0;
//     const n = formula.length;

//     const stack = [new Map()] // 初始化压入一个空栈
//     while (i < n) {
//         const ch = formula[i]
//         // 解析一串连续的字母
//         function parseAtom() {
//             const sb = []
//             sb.push(formula[i++]); // 扫描首字母
//             // 扫描首字母后的小写字母
//             while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
//                 sb.push(formula[i++])
//             }
//             return sb.join('');
//         }
//         // 解析数字
//         const parseNum = () => {
//             // 到末尾了 || 不是数字，视作 1
//             if (i === n || isNaN(Number(formula[i]))) {
//                 return 1
//             }
//             // 获取数字
//             let num = 0
//             while (i < n && !isNaN(Number(formula[i]))) {
//                 const base = num * 10 // 如果是多位数字 则扩大十倍
//                 const now = Number(formula[i]) // 当前数字
//                 num = base + now // 扫描数字
//                 i++
//             }
//             return num
//         }

//         if (ch === '(') {
//             i++;
//             // 增加括号层级
//             stack.unshift(new Map()) // 将一个空的哈希表压入栈中，准备统计括号内的原子数量
//         } else if (ch === ')') {
//             i++
//             const num = parseNum() // 括号右侧数字
//             // 减少括号层级
//             const popMap = stack.shift() // 弹出括号内的原子数量
//             const topMap = stack[0]
//             // 栈中的数量与初始化的栈进行合并字母数量
//             for (const [atom, count] of popMap.entries()) {
//                 let beforeNum = topMap.get(atom) || 0 // 初始化栈中之前的数量
//                 let nowNum = count * num // 栈中的数量 乘以倍数
//                 topMap.set(atom, nowNum + beforeNum) // 将括号内的原子数量乘上 num，加到上一层的原子数量中
//             }
//         } else {
//             const atom = parseAtom() // 解析完字母
//             const num = parseNum() // 字母后面是否跟着数字
//             // 将最外面层级 合并到第一个栈中
//             const topMap = stack[0]
//             topMap.set(atom, (topMap.get(atom) || 0) + num)

//         }
//     }
//     // 最后都合并到第一个栈中
//     let map = stack.pop()
//     return Object.fromEntries(map.entries()) // map转对象
// }

// 节流
// function Foo(func, wait, ...params) {
//     let before = null
//     return function(...params2) {
//         let now = Date.now() // 当前时间
//         if (!before || now - before >= wait) {
//             let res = func.call(this, ...params, ...params2)
//             before = now // 上次执行时间
//             return res
//         }
//     }
// }

// function flatten(obj) {
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
