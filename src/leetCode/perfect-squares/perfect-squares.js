/**
 * @param {number} n
 * @return {number}
 */
//  动态规划
let numSquares = function (n) {
  let dp = new Array(n + 1).fill(0) // dp
  // 查找到n为止
  for (let i = 0; i <= n; i++) {
    dp[i] = i // 最坏情况 每次加1
    // 查找到没有完全平方数可以减为止
    for (let j = 1; i - j * j >= 0; j++) {
      let count = j * j // 当前值的完全平方数
      const dpCountMinIndex = i - count // 减去这个值 获取减去这个值的最少数量
      let countMin = dp[dpCountMinIndex] + 1 // 加上count这个完全平方数 比对最小数量
      const preMin = dp[i] // 之前计算的最小需要完全平方数的数量
      dp[i] = Math.min(preMin, countMin)
    }
  }
  return dp[n]
}

