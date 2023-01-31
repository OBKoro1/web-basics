/**
 * 动态规划
 * @param {number[]} cost
 * @return {number}
 */
let minCostClimbingStairs = function (cost) {
  let n = cost.length
  let dp = new Array(n + 1).fill(0) // 爬最后一层免费 多取最后一层
  // 前两个台阶免费
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i <= n; i++) {
    // 可以从下标 i-1i−1 使用 \textit{cost}[i-1]cost[i−1] 的花费达到下标 ii，或者从下标 i-2i−2 使用 \textit{cost}[i-2]cost[i−2] 的花费达到下标 ii。为了使总花费最小，\textit{dp}[i]dp[i] 应取上述两项的最小值
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
  }
  return dp[n]
}

// // 空间优化：使用变量保存

// var minCostClimbingStairs = function(cost) {
//     const n = cost.length;
//     let prev = 0, curr = 0;
//     for (let i = 2; i <= n; i++) {
//         let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
//         prev = curr;
//         curr = next;
//     }
//     return curr;
// };
