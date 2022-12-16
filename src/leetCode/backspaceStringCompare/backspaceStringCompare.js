// leetCode 72-简单

// 给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

// 注意：如果对空文本输入退格字符，文本继续为空。

// 1. 输入：s = "ab#c", t = "ad#c"
// 输出：true
// 解释：s 和 t 都会变成 "ac"。

// 2. 输入：s = "ab##", t = "c#d#"
// 输出：true
// 解释：s 和 t 都会变成 ""。

// 3. 输入：s = "a#c", t = "b"
// 输出：false
// 解释：s 会变成 "c"，但 t 仍然是 "b"。


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = function (s, t) {

}

console.log(backspaceCompare('ab#c', 'ad#c')) // true
console.log(backspaceCompare('ab##', 'c#d#')) // true
console.log(backspaceCompare('a#c', 'b')) // false


// 答案慎看

















// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var backspaceCompare = function (s, t) {
//     let help = (str) => {
//         let stack = [] // 栈
//         for (let i = 0; i < str.length; i++) {
//             if (str[i] === '#') {
//                 // 遇到#则删除一位
//                 if (stack.length) {
//                     stack.pop()
//                 }
//             } else {
//                 // 否则进栈
//                 stack.push(str[i])
//             }
//         }
//         return stack.join('') // 转为数组
//     }
//     return help(s) === help(t)
// };
