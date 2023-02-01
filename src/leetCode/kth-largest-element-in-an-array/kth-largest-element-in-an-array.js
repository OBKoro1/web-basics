/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, n) {
  let value
  // 遍历n次，移除n个最大值，最终value即为第n大元素
  for (let i = 0; i < n; i++) {
    let item = Math.max(...nums) // 取出最大值
    value = nums.splice(nums.indexOf(item), 1)[0] // 删除并保存最大值
  }
  return value
}

// /**
//  * 各种排序方法 然后获取第n个元素
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// const findKthLargest = function(nums, n) {
//     // 排序替换
//     nums.sort((a, b) => {
//       return b - a;
//     });
//     return nums[n - 1]; // 第n大(数组从0开始)
// };
