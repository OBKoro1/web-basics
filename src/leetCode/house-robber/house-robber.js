/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // 0的时候 直接取第一个
    if (i === 0) {
      nums[0] = nums[i]
    } else if (i === 1) {
      // 1的时候 对比前两个
      nums[i] = Math.max(nums[0], nums[1])
    } else {
      // 上上一个值的最大值 + 当前值 即为当前位置的最大值
      let now = nums[i - 2] + nums[i]
      // 对比上一个最大值 与当前最大值 相比 取最大的
      nums[i] = Math.max(now, nums[i - 1])
    }
  }
  return nums[nums.length - 1]
}


// /**
//  * 动态规划 空间优化
//  * @param {number[]} nums
//  * @return {number}
//  */
// var rob = function (nums) {
//   let prev = 0 // 上上个值
//   let curr = 0 // 上个值
//   for (let i = 0; i < nums.length; i++) {
//     // 上上一个值的最大值 + 当前值 即为当前位置的最大值
//     let now = prev + nums[i]
//     // 对比上上房间+当前房间 与上一间最大值 相比 取最大的
//     prev = curr
//     curr = Math.max(curr, now) // 当前计算的房间
//   }
//   return curr
// }

