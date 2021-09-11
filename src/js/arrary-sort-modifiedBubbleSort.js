/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 00:28:45
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-11 17:41:26
 * FilePath     : /js-base/src/js/arrary-sort-modifiedBubbleSort.js
 * description  : 冒泡排序
 * 大的值好像气泡慢慢升至表面
 * 思路: 双重遍历，相邻比较，前面的比后面的大就交换位置。
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

function modifiedBubbleSort(arr) {
  var length = arr.length
  for (var i = 0; i < length; i++) {
    // 每个元素跟其他元素比较 双重遍历
    const num = length - 1 - i //  减去上面已经冒泡 排序好的值 提高性能
    for (var j = 0; j < num; j++) {
      //  比较不同值，交换位置
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // 交换位置
      }
    }
  }
}
