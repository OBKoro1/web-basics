/**
 * @param {number[]} stones
 * @return {number}
 */
//  https://leetcode-cn.com/problems/last-stone-weight-ii/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/
// 背包问题 套模板
// 0/1背包 最值问题
// 外循环nums 内循环target target倒序 且 target >= nums[i]
// 状态方程：dp[i] = max/min(dp[i], dp[i - nums[i]] + nums[i]) // 当前题目下：更新空间所能承受的最大重量
let lastStoneWeightII = function (stones) {
  let total = 0 // 总数
  for (let i = 0; i < stones.length; i++) {
    total += stones[i]
  }
  let target = Math.floor(total / 2) // 差值小 差值都要接近sum /2
  // 初始化dp 最后要取target的dp值 所以dp容量要以target为限
  let dp = new Array(target + 1).fill(0)
  for (const stone of stones.values()) { // 循环数目
    for (let i = target; i >= stone; i--) { // 中间值比数目大 在当前这个数目下 中间值的每个dp[i]可以放多重
      // 当前空间情况下使用目前这个重量数目下可以放多重的物品 如果比以前的数目重 则更新当前空间的重量
      dp[i] = Math.max(dp[i], dp[i - stone] + stone)
    }
  }
  return total - 2 * dp[target]
}
