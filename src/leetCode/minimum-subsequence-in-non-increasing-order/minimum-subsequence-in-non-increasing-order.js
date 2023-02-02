/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  nums.sort((a, b) => b - a) // 排序 贪心：从大的开始加
  let res = []
  let count = 0
  // 元素和
  let total = nums.reduce((prev, current) => {
    return prev + current
  }, 0)
  for (let i = 0; i < nums.length; i++) {
    res.push(nums[i])
    count += nums[i] // 添加的元素和
    // 元素和大于 总和减去元素和
    if (count > total - count) {
      return res
    }
  }
}
