/**
 * 双指针
 * 插入位置有一个对应的指针
 * 两个数组对应元素相比较
 * 大的元素 插到大数组的指针上 并且减去一个指针
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let len1 = m - 1 // 第一个数组元素比较的指针
  let len2 = n - 1 // 第二个数组元素比较的指针
  let site = m + n - 1 // 插入位置的指针
  // 两个数组的指针都要大于0
  while (len1 >= 0 || len2 >= 0) {
    // 比较大小：nums2的元素插入到指针位置 并且移动nums2比较的指针
    // 边界情况：len1为空 len2 指针还未完成 如果nums1[len1] === undefined 说明将 nums2[len2]直接插入即可 如果nums2[len2]是undefind 则进入else 添加nums1[len1]
    if (nums1[len1] < nums2[len2] || (nums1[len1] === undefined && len2 >= 0)) {
      nums1[site] = nums2[len2]
      len2--
    } else {
      // nums1 元素比较大 插入 移动nums1比较的指针
      nums1[site] = nums1[len1]
      len1--
    }
    site-- // 插入位置 指针减一
  }
  return nums1
}
