/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let stack = [] // 栈
  for (let i = 0; i < num.length; i++) {
    const ch = num.charAt(i) // 下一个要比较的值
    // while循环 如果下一个值比前一个值小的话 就一直往前删 直到没k
    // 如果下一个值比最后加入的值小的话就把上一个值删掉
    while (k > 0 && stack.length !== 0 && stack[stack.length - 1] > ch) {
      k--
      stack.pop()
    }
    // 不能以0开头
    if (ch === '0' && stack.length === 0) continue
    stack.push(ch)
  }
  // k在上面还没减完 比如"150001" 3 会减去1、5 还剩以为 stack = [1]
  // 保留stack中的n-k位
  const res = stack.splice(0, stack.length - k).join('')
  return res.length === 0 ? '0' : res
}
