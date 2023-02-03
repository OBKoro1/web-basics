/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let stack = []
  let index = 0 // target指针 找到当前循环的目标值
  for (let i = 1; i <= n; i++) {
    // 添加target的元素
    stack.push('Push')
    if (target[index] > i) {
      // 如果目标元素比当前值大 添加了 删除
      stack.push('Pop')
      continue
    }
    index++ // 移动target指针 查找下一个target
    if (i === target[target.length - 1]) break // 当前循环值 就是目标值的最后一个元素 结束
  }
  return stack
}
