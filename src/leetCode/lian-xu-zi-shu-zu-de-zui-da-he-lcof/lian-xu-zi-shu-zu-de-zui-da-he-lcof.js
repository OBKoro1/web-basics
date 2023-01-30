

// 动态规划
let maxSubArray = function (nums) {
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    let beforeIsUse = Math.max(nums[i - 1], 0) // 是否使用之前的最大值 使用0则遗弃
    nums[i] += beforeIsUse // 当前值 + 之前值 等于目前最大和
    res = Math.max(nums[i], res) // 更新存储的最大和
  }
  return res
}

// /**
//  * 动态规划
//  * @param {number[]} nums
//  * @return {number}
//  */
// let maxSubArray = function (nums) {
//   let max = nums[0]
//   let nowValue = nums[0] // 之前子数组的和
//   for (let i = 1; i < nums.length; i++) {
//     // 之前子数组的和 与当前值比较
//     nowValue = Math.max(nums[i], nums[i] + nowValue)
//     // 之前存储的最大值 与当前子数组的最大值比较
//     max = Math.max(max, nowValue)
//   }
//   return max
// }
