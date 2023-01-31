// dfs深度优先

let findTargetSumWays = function (nums, target) {
  let res = 0
  function dfs(index, cur) {
    // 数组 + - 分别都操作过一遍了
    if (index === nums.length) {
      if (cur === target) {
        res++
      }
      return
    }
    dfs(index + 1, cur - nums[index])
    dfs(index + 1, cur + nums[index])
  }
  dfs(0, 0) // 搜索
  return res
}


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// //  https://leetcode-cn.com/problems/last-stone-weight-ii/solution/yi-pian-wen-zhang-chi-tou-bei-bao-wen-ti-5lfv/
// //  01背包：外循环nums 内循环target 倒序 且target>= num
// // 不考虑顺序的组合问题：dp[i] += dp[i - num]
// let findTargetSumWays = function (nums, target) {
//   let total = 0
//   for (const num of nums.values()) {
//     total += num
//   }
//   // 如果S大于sum，不可能实现，返回0
//   // 如果x不是整数，也就是S + sum不是偶数，不可能实现，返回0
//   if (total < target || (total + target) % 2 !== 0) return 0
//   // 我们想要的 S = 正数和 - 负数和 = x - y
//   // 而已知x与y的和是数组总和：x + y = sum
//   // 可以求出 x = (S + sum) / 2 = target
//   target = (total + target) / 2 // 正数目标值
//   if (target < 0) return 0 // 正数目标值需要大于0
//   let dp = new Array(target + 1).fill(0)
//   // 初始化累加值
//   dp[0] = 1 // 填满容易为0的背包只有一种方法
//   for (const num of nums.values()) {
//     for (let i = target; i >= num; i--) {
//       // eslint-disable-next-line operator-assignment
//       dp[i] = dp[i] + dp[i - num] // 当前的最小数量
//     }
//   }
//   return dp[target]
// }

