/**
 * @param {number[]} nums
 * @return {number}
 */
// 快慢指针
var removeDuplicates = function (nums) {
  let j = 0 // 改变前面元素的指针
  //   从第二个开始与第一个匹配
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      // 值不同 更改下一个的值 答案只要求前面几个值变更
      j++
      nums[j] = nums[i] // 更改前面几个元素
    }
    // 相同则跳过继续迭代
  }
  // 可以在这里删除后面的nums
  return j + 1 // 返回数量
}

// // 快慢指针 while写法
// var removeDuplicates = function (nums) {
//   const n = nums.length
//   if (n === 0) {
//     return 0
//   }
//   let fast = 1; let
//     slow = 1
//   while (fast < n) {
//     if (nums[fast] !== nums[fast - 1]) {
//       nums[slow] = nums[fast]
//       ++slow
//     }
//     ++fast
//   }
//   return slow
// }
