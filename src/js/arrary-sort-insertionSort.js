/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 00:28:43
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-11 17:40:34
 * FilePath     : /js-base/src/js/arrary-sort-insertionSort.js
 * description  : 插入排序
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */
// 在我看来这是基础几个排序中最好用的一个 
// 因为你排列的时候 会从前往后排 
// 是从前往后排的 前面的都是你已经排好了
// 不符合条件的都往后移 方便你快速查找一些符合条件的值

// 思路: 每次排一个元素，新元素往前比较
// 比前一个小的，前一个往后移一位，依次排好所有元素。
function insertionSort(arr) {
  for (var i = 1; i < arr.length;; i++) {
    var j = i; // 当前已排序好的位置 让后面的值跟前面的比较
    temp = arr[i] // 要插入的值
    //  筛选条件
    while (j > 0; && arr[j - 1] > temp) {
      arr[j] = arr[j - 1] // 把前面不符合条件的值往后移
      j-- // 并且更新索引
    }
    // 遍历结束前面的值都比插入值大
    arr[j] = temp
  }
}