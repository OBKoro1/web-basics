/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let help = (str) => {
    let stack = [] // 栈
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '#') {
        // 遇到#则删除一位
        if (stack.length) {
          stack.pop()
        }
      } else {
        // 否则进栈
        stack.push(str[i])
      }
    }
    return stack.join('') // 转为数组
  }
  return help(s) === help(t)
}
