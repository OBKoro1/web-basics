/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 00:23:28
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-12 23:44:28
 * FilePath     : /js-base/src/js/arrary-sort-selection.js
 * description  : 选择排序
 * 思路: 找到目标值的下标，与当前遍历元素的下标交换。
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i // 当前下标
    // j = i i就是已经排序过的
    for (let j = i; j < arr.length; j++) {
      //  寻找目标值 这里是最小值 也可以是其他判断条件
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    //  下标不同 与当前遍历元素的下标交换。
    if (indexMin !== i) {
      [arr[indexMin], arr[i]] = [arr[i], arr[indexMin]]
    }
  }
}

// 使用
const oldArr = [3, 4, 5, 1, 2, 7, 8]

selectionSort(oldArr)
console.log('排序结果', oldArr)
