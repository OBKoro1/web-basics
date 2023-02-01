/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分法查找
var search = function (nums, target) {
  // 时间复杂度：O(logn)
  // 空间复杂度：O(1)
  // [6,7,8,1,2,3,4,5]
  let start = 0
  let end = nums.length - 1

  while (start <= end) {
    const mid = start + ((end - start) / 2)
    if (nums[mid] === target) return mid

    // [start, mid]有序

    // ️注意这里的等号
    if (nums[mid] >= nums[start]) {
      // target 在 [start, mid] 之间

      // 其实target不可能等于nums[mid]， 但是为了对称，我还是加上了等号
      if (target >= nums[start] && target < nums[mid]) {
        end = mid - 1
      } else {
        // target 不在 [start, mid] 之间
        start = mid + 1
      }
    } else {
      // [mid, end]有序

      // target 在 [mid, end] 之间
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1
      } else {
        // target 不在 [mid, end] 之间
        end = mid - 1
      }
    }
  }

  return -1
}


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function (nums, target) {
//   const searchNum = (i, direction = 'left') => {
//     // 找到目标值
//     if (nums[i] === target) {
//       return i
//     }
//     if (direction === 'left') {
//       // 上升值错过该目标
//       if (nums[i] > target) {
//         return -1
//       } if (nums[i] < nums[0]) {
//         // 上升值 小于最小值
//         return -1
//       }
//     } else {
//       // 下降 小于该目标值
//       if (nums[i] < target) {
//         return -1
//       } if (nums[i] > nums[nums.length - 1]) {
//         // 下降值 大于最大值
//         return -1
//       }
//     }
//     return '查找ing'
//   }
//   // 循环方向
//   if (target >= nums[0]) {
//     // 如果目标值大于第一个值即为从左往右 上升查找
//     for (let i = 0; i < nums.length; i++) {
//       const res = searchNum(i)
//       if (res !== '查找ing') {
//         return res
//       }
//     }
//   } else {
//     for (let i = nums.length - 1; i > 0; i--) {
//       const res = searchNum(i, 'right')
//       if (res !== '查找ing') {
//         return res
//       }
//     }
//   }
//   return -1 // 没找到
// }
