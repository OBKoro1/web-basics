/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let len1 = grid.length
  let len2 = grid[0].length
  let max = 0
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (grid[i][j] === 1) {
        // 获取这片岛屿的面积
        let res = dfs(i, j)
        // 更新最大面积
        max = Math.max(max, res)
      }
    }
  }
  // 深度遍历
  function dfs(i, j) {
    let init = 1
    let res1 = 0
    let res2 = 0
    let res3 = 0
    let res4 = 0
    grid[i][j] = 0
    // 上
    if (i > 0 && grid[i - 1][j] === 1) {
      res1 = dfs(i - 1, j)
    }
    // 下
    if (i < len1 - 1 && grid[i + 1][j] === 1) {
      res2 = dfs(i + 1, j)
    }
    // 左
    if (j > 0 && grid[i][j - 1] === 1) {
      res3 = dfs(i, j - 1)
    }
    // 右
    if (j < len2 - 1 && grid[i][j + 1] === 1) {
      res4 = dfs(i, j + 1)
    }
    // 获取每个方向有几个1 相加即为面积
    return init + res1 + res2 + res3 + res4
  }
  return max
}
