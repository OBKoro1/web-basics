/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let max = nums[0]
  let before = nums[0]
  for (let i = 1; i < nums.length; i++) {
    // 当前值 与之前值加当前值比较 找出是否上升
    before = Math.max(nums[i], nums[i] + before)
    // 找出目前最大值
    max = Math.max(max, before)
  }
  return max
}
