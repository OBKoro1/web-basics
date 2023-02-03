/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let len1 = grid.length
  let len2 = grid[0].length
  let res = 0
  // 遍历所有格子
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (grid[i][j] === 1) {
        // 只有一个岛屿 直接return
        res += help(i, j)
      }
    }
  }
  // 计算单个格子的墙
  function help(i, j) {
    let one = 4 // 初始化一个格子四道墙
    // 碰到周边格子是1 则减1
    if (i > 0 && grid[i - 1][j] === 1) {
      one--
    }
    if (i < len1 - 1 && grid[i + 1][j] === 1) {
      one--
    }
    if (j > 0 && grid[i][j - 1] === 1) {
      one--
    }
    if (j < len2 - 1 && grid[i][j + 1] === 1) {
      one--
    }
    return one
  }
  return res
}
