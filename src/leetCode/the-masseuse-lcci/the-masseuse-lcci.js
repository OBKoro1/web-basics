/**
 * 动态规划、贪心 求出每个选择的最优值
 * @param {number[]} nums
 * @return {number}
 */

let massage = function (nums) {
  let arr = [0, nums[0]] // 初始化
  for (let i = 2; i <= nums.length; i++) {
    // 选或者不选本次预约 哪个更合理
    // f(n) = Math.max(f(n-2) + nums[n - 1], f(n-1))
    // 前天是否选择过预约+今天的预约 与 昨天预约的长度比较
    // 得出今天的最长长度 每天都是最长长度也就是最优子结构
    // 最后得出的就是最大值
    arr[i] = Math.max(arr[i - 2] + nums[i - 1], arr[i - 1])
  }
  return arr[nums.length]
}
