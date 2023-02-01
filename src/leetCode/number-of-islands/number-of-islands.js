// dfs 深度优先
// var numIslands = function (grid) {
//     let len1 = grid.length
//     let len2 = grid[0].length
//     let res = 0
//     for (let i = 0; i < len1; i++) {
//         for (j = 0; j < len2; j++) {
//             if (grid[i][j] === '1') {
//                 res++ // 计算第一个岛屿
//                 dfs(i, j) // 找出所有相邻的数量 如果是1 则置为0 表示是同一个岛屿 已经算过了
//                  // 没有相邻的继续加1
//             }
//         }
//     }
//     function dfs(i, j) {
//         grid[i][j] = '0' // 置为0
//         // 上
//         if (i < len1 - 1 && grid[i + 1][j] === '1') {
//             dfs(i + 1, j)
//         }
//         // 下
//         if (i > 0 && grid[i - 1][j] === '1') {
//             dfs(i - 1, j)
//         }
//         // 左
//         if (j > 0 && grid[i][j - 1] === '1') {
//             dfs(i, j - 1)
//         }
//         // 右
//         if (j < len2 - 1 && grid[i][j + 1] === '1') {
//             dfs(i, j + 1)
//         }
//     }
//     return res
// }

// 广度优先
var numIslands = function (grid) {
  let len1 = grid.length
  let len2 = grid[0].length
  let res = 0
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (grid[i][j] === '1') {
        res++ // 岛屿+1
        bfs(i, j) // 找出所有相邻的数量 如果是1 则置为0 表示是同一个岛屿 已经算过了
        // 没有相邻的继续加1
      }
    }
  }
  // 广度优先
  function bfs(i, j) {
    let stack = [[i, j]]
    while (stack.length) {
      let [itemI, itemJ] = stack.pop()
      grid[itemI][itemJ] = '0'
      // 上
      if (itemI > 0 && grid[itemI - 1][itemJ] === '1') {
        stack.push([itemI - 1, itemJ])
      }
      // 下
      if (itemI < len1 - 1 && grid[itemI + 1][itemJ] === '1') {
        stack.push([itemI + 1, itemJ])
      }
      // 左
      if (itemJ > 0 && grid[itemI][itemJ - 1] === '1') {
        stack.push([itemI, itemJ - 1])
      }
      // 右
      if (itemJ < len2 - 1 && grid[itemI][itemJ + 1] === '1') {
        stack.push([itemI, itemJ + 1])
      }
    }
  }
  return res
}
