/*
 * Author       : OBKoro1
 * Date         : 2021-11-09 17:54:53
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-09 18:02:16
 * description  : 判断符号组成的字符串是否正确
 */



// 第三题
// 输入 '(' ')' '[' ']' '{'  '}' 组成的字符串 判断是否正确
// 输入 '()[{}]' true
// '({[}])' false

// 先说一下思路 然后实现代码

function test(str) {

}













// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看























// 输入 '(' ')' '[' ']' '{'  '}' 组成的字符串 判断是否正确
// 输入 '()[{}]' true
// '({[}])' false

// function test(str) {
//     let stack = [] // 栈
//     // 关闭符和开始符的映射
//     let hash = {
//         ')': '(',
//         ']': '[',
//         '}': '{',
//     }
//     for (let i = 0; i < str.length; i++) {
//         let item = str[i]
//         let isClose = hash[item] // 关闭符 对应的开始符
//         // 如果是关闭的话
//         if (isClose) {
//             let last = stack[stack.length - 1] // 最后一个
//             if (last === isClose) {
//                 // 匹配到开始符
//                 stack.pop() // 出栈
//             } else {
//                 return false // 不匹配
//             }
//         } else {
//             // 不是关闭 入栈
//             stack.push(item)
//         }
//     }
//     if (stack.length === 0) return true
//     return false
// }
