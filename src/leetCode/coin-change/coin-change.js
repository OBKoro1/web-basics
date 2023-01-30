/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 解析：https://leetcode-cn.com/problems/last-stone-weight-ii/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/
// 背包问题模板
// 完全背包问题、最值问题： 外循环nums 内循环target target正序 且 target>= nums[i]
// 状态转移方程：dp[i] = max/min (dp[i], dp[i-nums[i]]+1) // 本题：更新当前数额下使用的最小数目硬币
let coinChange = function (coins, amount) {
  let max = amount + 1
  let dp = new Array(amount + 1).fill(max)
  // 0块钱 用0硬币 没毛病
  dp[0] = 0 // 初始化硬币的数量  用于累加
  for (const coin of coins.values()) { // 外循环 所有的硬币 也就是所有路径
    for (let i = 0; i <= amount; i++) { // 内循环目标值 每个目标值在不同硬币下 最小换几次
      if (coin <= i) { // 数额大于硬币 才可以用硬币兑换
        // 更新dp[i]使用不同coin的数量
        const lastCoinMin = dp[i - coin]
        // 使用不同coin 哪个最小
        dp[i] = Math.min(dp[i], lastCoinMin + 1)
      }
    }
  }
  return dp[amount] === max ? -1 : dp[amount]
}

// 动态规划 自下而上计算最小值
// var coinChange = function (coins, amount) {
//     let max = amount + 1 // 每个硬币如果最小是1 不可能超过amount+1
//     // 初始化dp
//     let dp = new Array(amount + 1).fill(max)
//     dp[0] = 0
//     for (let i = 1; i <= amount; i++) {
//         // 计算每个金币的最小值 在i这个数量的最小值 方便更新最小值
//         for (let j = 0; j < coins.length; j++) {
//             let nowMoney = coins[j]
//             // 因为硬币不能拆开 所以当前硬币必须比i这个数量的钱小 才能计算当前硬币需要几个硬币
//             if (nowMoney <= i) {
//                 let beforeMin = dp[i - nowMoney] // 动态规划 利用之前的计算：减去当前金币的钱 最小需要硬币是多少
//                 let addBeforeMin = beforeMin + 1 // 加上当前的nowMoney的这枚硬币 得出目前在nowMoney下的最小硬币数量
//                 // dp[i] 以每种金币为值 计算一遍最小值 如果后续有更小的 则更新dp[i]
//                 dp[i] = Math.min(dp[i], addBeforeMin)
//             }

//         }
//     }
//     // 如果dp[amount] > max 说明未找到组成方案 因为初始化是最大值
//     return dp[amount] === max ? -1 : dp[amount]
// };
