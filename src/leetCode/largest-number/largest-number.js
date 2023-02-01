/**
 * 1. 转字符串
 * 2. 重点： sort排序, 两个值合并分别比较，倒序排序
 * 3. 最后将其组合起来
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  // 转字符串操作
  nums = nums.map((item) => String(item))
  // sort排序,
  // 重点是：两个值合并分别比较，倒序排序
  // 对于 [4,42][4,42]，比较 442 > 424442>424，需要把 44 放在前面；
  // 对于 [4,45][4,45]，比较 445 < 454445<454，需要把 4545 放在前面。
  nums.sort((a, b) => {
    let res1 = a + b
    let res2 = b + a
    return res2 - res1
  })
  // 前导0的情况 [ 0, 0] 情况
  if (nums[0] === '0') return '0'
  // 组合字符串
  return nums.join('')
}
