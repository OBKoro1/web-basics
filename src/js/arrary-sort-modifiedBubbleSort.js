// 冒泡排序: 大的值好像气泡慢慢升至表面
// 思路: 双重遍历，相邻比较，前面的比后面的大就交换位置。
function modifiedBubbleSort(arr) {
  var length = arr.length
  for (var i = 0; i < length; i++) {
    // 每个元素跟其他元素比较 双重遍历
    const num = length - 1 - i // TODO: 减去上面已经冒泡 排序好的值 提高性能
    for (var j = 0; j < num; j++) {
      // TODO: 比较不同值，交换位置
      if (arr[j] > arr[j + 1]) {
        ;[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]] // 交换位置
      }
    }
  }
}
