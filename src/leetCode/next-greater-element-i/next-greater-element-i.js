// 单调栈解法
// 哈希表 储存nums2下一个比它大的值
var nextGreaterElement = function (nums1, nums2) {
  let stack = []
  let hash = new Map() // 哈希表 储存nums2下一个比它大的值
  for (let i = 0; i < nums2.length; i++) {
    // 栈中如果有元素 找到比栈中最后一个元素大
    while (stack.length && stack[stack.length - 1] < nums2[i]) {
      hash.set(stack[stack.length - 1], nums2[i]) // 映射这个值的 下一个比它大的值
      stack.pop() // 找到比它大 则在栈中删除
    }
    stack.push(nums2[i]) // 入栈 找它的下一个比它大的元素
  }
  // 找nums1中的元素是否在hash中有值 有值就赋值  没值则-1
  for (let i = 0; i < nums1.length; i++) {
    let value = hash.get(nums1[i])
    if (value !== undefined) {
      nums1[i] = value
    } else {
      nums1[i] = -1
    }
  }
  return nums1
}

/**
 * 暴力解法
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function (nums1, nums2) {
//     for (let i = 0; i < nums1.length; i++) {
//         let target = nums1[i]
//         let find = false // 找到
//         let maxNum // 比它大的值
//         for (let j = 0; j < nums2.length; j++) {
//             if (nums2[j] === target) {
//                 find = true
//                 continue
//             }
//             // 找到之后 开始找后面有没有比它大的
//             if (find && nums2[j] > target) {
//                 maxNum = nums2[j] // 找到
//                 break
//             }
//         }
//         // 判断有没有找到 赋值
//         if (maxNum !== undefined) {
//             nums1[i] = maxNum
//         } else {
//             nums1[i] = -1
//         }
//     }
//     return nums1
// };
