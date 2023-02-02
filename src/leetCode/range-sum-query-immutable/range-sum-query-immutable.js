var NumArray = function (nums) {
  let total = nums.length
  this.res = new Array(total + 1).fill(0)
  for (let i = 0; i < total; i++) {
    // 求每个元素从头的元素总和 并缓存它
    this.res[i + 1] = nums[i] + this.res[i]
  }
}


NumArray.prototype.sumRange = function (left, right) {
  // 直接输出 结尾元素的和减去开始元素到起始元素的和即可
  return this.res[right + 1] - this.res[left]
}

// /**
//  * 普通方法
//  * @param {number[]} nums
//  */
// var NumArray = function (nums) {
//     this.nums = nums
// };

// /**
//  * 每次循环都要重新计算 太麻烦了
//  * @param {number} left
//  * @param {number} right
//  * @return {number}
//  */
// NumArray.prototype.sumRange = function (left, right) {
//     let res = 0;
//     for (let i = left; i <= right; i++) {
//         res = res + this.nums[i]
//     }
//     return res
// };

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
