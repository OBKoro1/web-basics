// // 贪心 找边界
// function jump(nums) {
//   let step = 0 // 步数
//   let end = 0 // 边界 当次跳越最远位置  到达边界 + 1 必须要多跳一次
//   let maxPosition = 0 // 当前这次能跳多远
//   for (let i = 0; i < nums.length - 1; i++) {
//     // i === 当前跳跃所处位置 nums[i] + i 这次位置能跳多远
//     // maxPosition 当前这次能跳多远
//     // 如果nums[i]+i比较大 则更新最远距离 但是边界不变
//     // 更新最远距离
//     maxPosition = Math.max(maxPosition, nums[i] + i)
//     // 遇到边界 增加跳跃 更新边界为当前跳跃的最远距离
//     if (i === end) {
//       end = maxPosition // 更新边界
//       step++ // 更新步数 第一次就+1了 后续结尾不用加
//     }
//   }
//   return step
// }

// 动态规划
function jump(nums) {
  let dp = [0] // 第一步是0
  let n = nums.length
  let maxPosition = 0 // 当前最远距离
  let maxPositionPre = 0 // 上次最远距离
  for (let i = 0; i < n; i++) {
    if (nums[i] + i > maxPosition) {
      maxPositionPre = maxPosition // 更新上次最远距离
      maxPosition = nums[i] + i // 当前最远距离
      // 从上次最远距离+1步开始跳
      for (let j = maxPositionPre + 1; j <= maxPosition; j++) {
        dp[j] = dp[i] + 1 // 每步都比上次最远距离大一步
        if (j === n - 1) return dp[j] // 遇到终点
      }
    }
  }
  return dp[n - 1] // 终点
}


// function jump(nums) {
//     let num = nums[0] // 初始能跳的步数
//     if (nums.length === 1) return 0
//     let total = 0 // 总共跳几次
//     let everOne = [num] // 每次经过的地方
//     function jumpOne(newNums, oneNum) {
//         let maxNum = 0 // 最远能跳多远
//         let maxIndex = oneNum // 最大值
//         if (oneNum + 1 >= newNums.length) {
//             // 步数已经足够到达最后一个位置
//             maxIndex = newNums.length - 1
//         } else {
//             // 每个点都跳一遍
//             for (let i = 1; i <= oneNum; i++) {
//                 // 当前已跳步数大于 之前缓存的最大步数 即为最优解
//                 if (i + newNums[i] >= maxNum) {
//                     maxNum = newNums[i] + i // 最远能跳多远
//                     maxIndex = i // 最远跳的目标位置
//                 }
//             }
//         }
//         total++ // 当前跳跃次数
//         everOne.push(newNums[maxIndex]) // 每次到达的位置
//         if (maxIndex !== newNums.length - 1) {
//             newNums.splice(0, maxIndex) // 清除已跳的元素
//             jumpOne(newNums, newNums[0])
//         }
//     }
//     jumpOne(nums, num)
//     return total
// }
