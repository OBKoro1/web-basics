/**
 * 动态规划
 * 不偷头部与不偷尾部分别算出 相比较 哪个更多
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  // 不偷尾部
  let noEnd = help(0, nums.length - 2)
  // 不偷头部
  let noHead = help(1, nums.length - 1)
  // 获取一段下标的最大值 变量版本
  // function help(start, end) {
  //     let prev = 0 // 上上个值
  //     let curr = 0 // 上个值
  //     while (start <= end) {
  //         // 当前最大值 = 上个最大值 与 上上个值 + 当前值 比较
  //         let temp = Math.max(curr, prev + nums[start])
  //         prev = curr // 上个值变成上上个值
  //         curr = temp // 当前值变成上上个值
  //         start++ // 增加指针
  //     }
  //     return curr
  // }
  // 获取一段下标的最大值 dp版本 最重要的是设置前面两个初始值
  function help(start, end) {
    let dp = [] // 对应数量的房间 能偷的最大值
    // 最重要的是设置前面两个初始值
    dp[start] = nums[start] // 起始的最大值
    dp[start + 1] = Math.max(nums[start], nums[start + 1]) // 第二个值的最大值
    for (let i = start + 2; i <= end; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
    }
    return dp[end]
  }
  // 不偷头部与不偷尾部相比较 哪个更多
  return Math.max(noEnd, noHead)
}


