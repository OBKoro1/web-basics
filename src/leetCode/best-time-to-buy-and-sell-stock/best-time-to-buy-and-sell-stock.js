/**
 * 动态规划
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let min = prices[0]
  const dp = [0]
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]) // 更新目前的最小股票
    dp[i] = Math.max(dp[i - 1], prices[i] - min) // 之前的最大价值与当天对比，更新最多获得多少钱
  }
  return dp[prices.length - 1]
}

// /**
//  * 设置一个最大利润, 不断更新最大利润
//  * 动态规划
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let max = 0;
//     let start = prices[0]; // 股票最小值
//     for (let i = 1; i < prices.length; i++) {
//         const end = prices[i] // 当天价格
//         let count = end - start // 利润
//         max = Math.max(count, max) // 利润比较大 则更新利润
//         start = Math.min(start, end) // 更新股票最小值 保证最低买入 最低买入 不等于卖出
//     }
//     return max
// };
