/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 1. 哈希表 Set 数据结构 // 提示 我只想到了对象
function intersection(nums1, nums2) {
  let resSet = new Set()
  let nums1Set = new Set(nums1)
  for (let i of nums2) {
    if (nums1Set.has(i)) {
      resSet.add(i)
    }
  }
  return Array.from(resSet)
}

// // 2. includes
// function intersection(nums1, nums2) {
//     return Array.from(new Set(nums1.filter(i => nums2.includes(i))))
// };


// // 3. 排序+双指针 可添加重复元素的方法 自己写的
// var intersection = function (nums1, nums2) {
//   let res = []
//   // 排序
//   nums1.sort((a, b) => a - b)
//   nums2.sort((a, b) => a - b)
//   let cur = 0 // 数组2的指针
//   for (let i = 0; i < nums1.length; i++) {
//     // 数组2的元素 小于数组1元素 表示它们不匹配
//     while (nums2[cur] < nums1[i]) {
//       cur++ // 移动指针
//       // 指针超过 匹配结束
//       if (cur === nums2.length) {
//         return res
//       }
//     }
//     if (res.length !== 0 && res[res.length - 1] === nums1[i]) continue // 不添加重复元素
//     // nums2元素比较大 移动nums1指针
//     if (nums2[cur] > nums1[i]) {
//       continue
//     } else if (nums2[cur] === nums1[i]) {
//       // 相等 则添加
//       res.push(nums1[i])
//     }
//     cur++ // 移动指针
//   }
//   return res
// }
