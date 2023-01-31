// 动态规划
let minPathSum = function (grid) {
  const m = grid.length // 二维长度
  const n = grid[0].length // 二维宽度
  // 倒序遍历
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      // 计算每一步移动到终点位置的代价 得到最终代价
      if (i + 1 < m && j + 1 < n) {
        // 可以向左和向上移动的情况 取最小值 动规
        grid[i][j] += Math.min(grid[i + 1][j], grid[i][j + 1])
      } else if (i + 1 < m) {
        // 只能向上移动的情况
        // 加上下一行数组的最后一个元素 计算向上移动的代价
        grid[i][j] += grid[i + 1][j]
      } else if (j + 1 < n) {
        // 只能向左移动的情况
        // 加上右侧的原先的值 计算向左移动的代价
        grid[i][j] += grid[i][j + 1]
      }
    }
  }
  return grid[0][0] // 由起点到终点的位置
}


// 深度优先
// var minPathSum = function (grid) {
//     const m = grid.length,
//         n = grid[0].length;
//     const memo = [...Array(m)].map(() => [...Array(n)]);
//     const calcPath = function (i, j) {
//         if (i + 1 === m && j + 1 === n) {
//             return grid[i][j]; // 返回终点位置的值
//         }
//         if (memo[i][j]) {
//             return memo[i][j]; // 计算过了, 不重复计算
//         }
//         let min = Infinity; // 初始化最大值
//         // 计算往右走以及往下走的步数，取最小值
//         if (i + 1 < m) {
//             // 防止右侧出界
//             // 计算往右走的最终代价
//             min = Math.min(min, calcPath(i + 1, j));
//         }
//         // 往下走的步数
//         if (j + 1 < n) {
//             // 防止下方出界
//             // 计算往下走的最终代价
//             min = Math.min(min, calcPath(i, j + 1));
//         }
//         memo[i][j] = min + grid[i][j]; // 终点到当前位置的代价
//         return memo[i][j]; // 返回每个位置到终点位置的代价
//     };
//     let res = calcPath(0, 0);
//     return res;
// };
