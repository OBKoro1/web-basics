// 1. 常规解法 遍历用映射表计算数量

/**
 * 2. 排序 因多数元素超过一半 中间数 即为那个值
 * @param {number[]} nums
 * @return {number}
 */
// var majorityElement = function (nums) {
//     nums.sort((a, b) => a - b)
//     let mid = Math.floor(nums.length / 2)
//     return nums[mid]
// };

// 投票算法
// 开心消消乐 互相碰撞
var majorityElement = function (nums) {
  let count = 0 // 最多数的数量
  let moreNumber = null // 最多的数
  for (let i = 0; i < nums.length; i++) {
    // 更新最大数
    if (count === 0) {
      moreNumber = nums[i]
    }
    // 碰撞 更新最大数的数量
    if (moreNumber === nums[i]) {
      count++
    } else {
      count--
    }
  }
  return moreNumber
}
