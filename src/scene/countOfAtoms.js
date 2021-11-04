/*
 * Author       : OBKoro1
 * Date         : 2021-10-29 15:16:56
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-29 15:19:01
 * FilePath     : /js-base/src/scene/countOfAtoms.js
 * description  : 根据表达式计算字母数
 * 阿里面试题-leetcode困难题
 * 这是一道leetcode题目 困难题
 *  稍微变了一下 改了一下最后输出 726题
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */
//
//

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

// leetcode 困难题

function countOfAtoms(formula) {

}

console.log(countOfAtoms('A2B3')) // { A: 2, B: 3 }
console.log(countOfAtoms('A(A3B)2')) // { A: 7, B: 2 }
console.log(countOfAtoms('C4(A(A3B)2)2')) // { A: 14, B: 4, C: 4 }

// 答案慎看

// 栈+哈希表
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
