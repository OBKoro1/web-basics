/**
 * 先分别拼接 确认大小 再排序
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    let res1 = `${a}${b}`
    let res2 = `${b}${a}`
    return res1 - res2
  })
  if (nums[0] === '0') return '0' // 前导0
  return nums.join('')
}
