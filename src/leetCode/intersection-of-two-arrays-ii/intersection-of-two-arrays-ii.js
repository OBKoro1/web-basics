/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// 排序+双指针 自己想的
// var intersect = function (nums1, nums2) {
//     // 排序
//     nums1.sort((a, b) => a - b)
//     nums2.sort((a, b) => a - b)
//     let res = []
//     let first = 0, cur = 0 // 第二个指针
//     while (first < nums1.length && cur < nums2.length) {
//         if (nums1[first] > nums2[cur]) {
//             // 第一个数组元素比较大 移动第二个元素的指针
//             cur++
//         } else if (nums1[first] === nums2[cur]) {
//             // 相同 添加到结果中 并且移动指针
//             res.push(nums1[first])
//             cur++
//             first++
//         } else {
//             // nums1[first] 比较小 增加指针
//             first++
//         }
//     }
//     return res
// };

// 哈希表 计数添加
var intersect = function (nums1, nums2) {
  let obj = new Map()
  let res = []
  // 计算nums1中元素的数量
  for (let i = 0; i < nums1.length; i++) {
    let currt = nums1[i]
    if (obj.has(currt)) {
      let total = obj.get(currt)
      obj.set(currt, total + 1)
    } else {
      obj.set(currt, 1)
    }
  }
  // 计算nums2中是否存在 如果存在数量减一并添加到res中
  for (let i = 0; i < nums2.length; i++) {
    let currt = nums2[i]
    if (obj.has(currt)) {
      let total = obj.get(currt)
      obj.set(currt, total - 1)
      res.push(currt)
      if (total - 1 === 0) obj.delete(currt)
    }
  }
  return res
}
