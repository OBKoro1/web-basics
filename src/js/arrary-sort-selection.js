// 选择排序
// 思路: 找到目标值的下标，与当前遍历元素的下标交换。
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var indexMin = i // TODO： 当前下标
    // j = i i就是已经排序过的
    for (var j = i; j < arr.length; j++) {
      // TODO: 寻找目标值 这里是最小值 也可以是其他判断条件
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    // TODO: 下标不同 与当前遍历元素的下标交换。
    if (indexMin !== i) {
      ;[arr[indexMin], arr[i]] = [arr[i], arr[indexMin]]
    }
  }
}
