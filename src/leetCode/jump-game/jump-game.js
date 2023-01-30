// 贪心
let canJump = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false // 最远距离不能到达当前位置
    max = Math.max(max, i + nums[i]) //  更新最远距离
    if (max >= nums.length - 1) return true // 大于等于最远位置 即成功
  }
}

// var canJump = function (nums) {
//     let canJumpMax = 0 // 新的最远距离 当前遍历
//     let last_canJumpMax = 0 // 当前最远距离
//     let len = nums.length
//     for (let i = 0; i < len; i++) {
//         // 获取新的最远距离 以备到达最远距离后更新
//         canJumpMax = Math.max(canJumpMax, i + nums[i])
//         if (last_canJumpMax === i) {
//             // 到达当前最远距离
//             // 更新能到达的最远距离
//             last_canJumpMax = canJumpMax
//         } else if (last_canJumpMax < i) {
//             // 超出能到达的最远距离 false
//             return false
//         }
//     }
//     return true
// }
