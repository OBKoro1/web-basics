// “下一个排列” 的定义是：给定数字序列的字典序中下一个更大的排列。如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
// 我们可以将该问题形式化地描述为: 给定若干个数字，将其组合为一个整数。如何将这些数字重新排列，以得到下一个更大的整数。如 123 下一个更大的数为 132。如果没有更大的整数，则输出最小的整数。

// https://leetcode.cn/problems/next-permutation/solution/xia-yi-ge-pai-lie-suan-fa-xiang-jie-si-lu-tui-dao-/
// 将后面的「大数」与前面的「小数」交换

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 2) return nums.reverse()
  let i = nums.length - 2
  // 找到第一个右侧数 大于 左侧数的 下标 i (这样就代表当前组成的数字不是最大的)
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--
  }
  // 不是最后一个排列
  if (i >= 0) {
    let j = nums.length - 1
    // 右到左开始找 第一个大于 i下标数字的 下标 j 最小数
    while (j > 0 && nums[j] <= nums[i]) {
      j--
    }
    // 找到后就是下一个排列 交换位置
    [nums[i], nums[j]] = [nums[j], nums[i]]
  }
  const reverseArr = (start, end) => {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
  // 将i下标往后的 数组 进行反序，变成升序；
  // 因为前面i往后的数字都是从右往前找 都是一个比一个小的 是降序的
  reverseArr(i + 1, nums.length - 1)
  return nums
}
