
// 53. 最大子数组和

// 动态规划
/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  // 存储最大的值
  let dp = [nums[0]]
  let res = dp[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
    res = Math.max(res, dp[i])
  }
  return res
}



// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// let maxSubArray = function (nums) {
//   // 存储最大的值
//   let max = nums[0]
//   let before = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     const now = nums[i]
//     // 更新当前最大值： 下一个值与之前值相加 取大的
//     if (now >= before + now) {
//       before = now
//     } else {
//       before += now
//     }
//     // 更新最大值
//     if (before > max) {
//       max = before
//     }
//   }
//   return max
// }



