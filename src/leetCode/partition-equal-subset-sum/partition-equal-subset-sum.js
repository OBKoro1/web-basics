/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 解析：https://leetcode-cn.com/problems/last-stone-weight-ii/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/
// 01背包 存在性问题： 外循环nums 内循环target target倒序且target>= nums[i]
// 转移方程：dp[i] = dp[i] || dp[i-num]
let canPartition = function (nums) {
  let total = 0
  for (const num of nums.values()) {
    total += num
  }
  if (total % 2 === 1) return false // 和是奇数 则无法分割成两堆 一样大的数组

  let target = Math.floor(total / 2)
  let dp = new Array(target + 1).fill(0)
  // 用于累加 更改后续的装态 否则都是false 无法更改状态
  dp[0] = true // 0不需要分割 即可以实现的
  // 循环nums 取出所有num
  for (const num of nums.values()) {
    // 循环target 递减，大于num。 因为要判断i-num的index是否可以分割。
    // 如果i-num可以分割，那么dp[i] 拿到这个num也能分割
    for (let i = target; i >= num; i--) {
      // 是否已经有其他数目可以分割 || 减去这个数目 上一个状态是否可以分割 如果可以分割 当前也可以分割
      dp[i] = dp[i] || dp[i - num]
    }
  }
  return dp[target]
}
