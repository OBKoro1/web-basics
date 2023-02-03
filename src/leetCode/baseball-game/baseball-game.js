/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [] // 栈维护得分
  for (let i = 0; i < ops.length; i++) {
    // 根据规则操作栈
    if (ops[i] === 'C') {
      stack.pop()
    } else if (ops[i] === 'D') {
      stack.push(stack[stack.length - 1] * 2)
    } else if (ops[i] === '+') {
      let value = stack[stack.length - 1] + stack[stack.length - 2]
      stack.push(value)
    } else {
      stack.push(Number(ops[i]))
    }
  }
  // 获取总数
  return stack.reduce((total, currt) => {
    return total + currt
  }, 0)
}
