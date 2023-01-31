
/**
 * 栈
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
  let total = s.length
  let stack = []
  let mapHsh = {
    ')': '(',
    '}': '{',
    ']': '[',
  }
  for (let i = 0; i < total; i++) {
    let item = s[i]
    if (mapHsh[item]) {
      // 1. 栈内没左符号 目前有右符号 则false
      // 2. 最后一个左符号应该先关闭: 栈内最后一个左符号 不匹配当前右符号 说明顺序错误 // "([)]"
      if (stack.length === 0 || stack[stack.length - 1] !== mapHsh[item]) {
        return false
      }
      stack.pop()
    } else {
      // 添加左符号
      stack.push(item)
    }
  }
  // 栈内符号消除完毕
  return stack.length === 0
}
