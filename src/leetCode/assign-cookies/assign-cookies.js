/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 排序饼干
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)
  let gIndex = 0 // 现在需要分配饼干的人 从最低胃口开始分配
  for (let i = 0; i < s.length; i++) {
    // 饼干可以配分配
    if (s[i] >= g[gIndex]) {
      // 指针指向下一个胃口大的人
      gIndex++
    }
  }
  return gIndex
}
