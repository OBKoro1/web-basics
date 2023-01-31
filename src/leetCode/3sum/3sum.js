/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 双指针
let threeSum = function (nums) {
  let ans = []
  const len = nums.length
  if (nums == null || len < 3) return ans
  nums.sort((a, b) => a - b) // 排序
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) break // 排序后 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if (i > 0 && nums[i] === nums[i - 1]) continue // 当前值重复 查找左右指针也会重复 导致结果重复 跳过
    let L = i + 1 // 左指针
    let R = len - 1 // 右指针
    while (L < R) { // 每个值 都查找所有匹配的值
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]])
        // 排序后 相同的值 都会在一起 避免后一个值与当前值相等
        while (L < R && nums[L] === nums[L + 1]) L++ // 值重复 查找左右指针也会重复 导致结果重复 去重
        while (L < R && nums[R] === nums[R - 1]) R-- // 值重复 查找左右指针也会重复 导致结果重复 去重
        L++
        R--
      } else if (sum < 0) L++ // 和小于0 左侧值过小
      else if (sum > 0) R-- // 和大于0 右侧值过大
    }
  }
  return ans
}
