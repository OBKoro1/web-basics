/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 00:28:45
 * LastEditors  : OBKoro1
 * LastEditTime : 2023-02-09 14:33:00
 * FilePath     : /web-basics/src/js/sort/arrary-sort-modifiedBubbleSort.js
 * description  : 冒泡排序
 * 大的值好像气泡慢慢升至表面
 * 思路: 双重遍历，相邻比较，前面的比后面的大就交换位置。
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

function modifiedBubbleSort(arr) {
  const { length } = arr
  for (let i = 0; i < length; i++) {
    // 每个元素跟其他元素比较 双重遍历
    const num = length - 1 - i //  减去上面已经冒泡 排序好的值 提高性能
    for (let j = 0; j < num; j++) {
      //  比较不同值，交换位置
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // 交换位置
      }
    }
  }
  return arr
}
// 使用
const oldArr = [3, 4, 5, 1, 2, 7, 8]

modifiedBubbleSort(oldArr)
console.log('排序结果', oldArr)
