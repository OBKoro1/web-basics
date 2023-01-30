/**
 * @param {number} n
 * @return {string[]}
 */
//  树思想 回溯
let generateParenthesis = function (n) {
  let left = n // 左右分支的数量
  let right = n // 左右分支的数量
  let res = []
  if (n === 0) {
    return res
  }
  dfs('', left, right)
  function dfs(preStr, left, right) {
    // 当没有括号时 即回溯终止
    if (left === 0 && right === 0) {
      res.push(preStr)
      return
    }
    // 当成一颗深度为2n的树来做 每个括号在这棵树内都会都用到
    // 剪枝: 左括号可以使用的个数严格大于右括号可以使用的个数时 左侧已经准备使用该括号了
    if (left > right) {
      return
    }
    // 一次添加左侧一次添加右侧 回溯 凑成括号
    if (left > 0) {
      dfs(`${preStr}(`, left - 1, right)
    }
    if (right > 0) {
      dfs(`${preStr})`, left, right - 1)
    }
  }
  return res
}
