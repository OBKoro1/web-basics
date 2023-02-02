/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let stack = [] // 栈
  for (let i = 0; i < S.length; i++) {
    if (stack.length && stack[stack.length - 1] === S[i]) {
      // 如果当前要添加的值与栈中最后一个值相同 则删除栈中的值并且不添加当前值
      stack.pop()
    } else {
      stack.push(S[i])
    }
  }
  return stack.join('')
}
