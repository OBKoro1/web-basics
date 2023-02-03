/**
 * @param {number[]} nums
 * @return {number}
 */

// 三角形：1. a <= b <= c 2. a+b >c
// 排序+贪心
var largestPerimeter = function (nums) {
  nums.sort((a, b) => a - b) // 排序
  // 倒序 从最长长度开始计算
  for (let i = nums.length - 1; i >= 2; i--) {
    if (nums[i - 2] + nums[i - 1] > nums[i]) {
      // 第一个满足条件的即为最大周长
      return nums[i - 2] + nums[i - 1] + nums[i]
    }
  }
  return 0
}
