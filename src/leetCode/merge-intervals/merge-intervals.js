/**
       * @param {number[][]} intervals
       * @return {number[][]}
       */
var merge = function (intervals) {
  if (intervals.length === 0) return []
  let res = []
  // 排序每个数组元素的第一个元素
  // 排序后第一个元素默认等于大于 区间的第一个元素 不用处理 只处理第二区间
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  // 初始化区间 从二维数组的第二个元素开始比较
  res.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
    // 当前数组元素的第一个元素 比之前区间的比较大的元素大的话 即为新区间
      res.push(intervals[i])
    } else if (intervals[i][1] > res[res.length - 1][1]) {
      // 当前数组元素的最大值 大于区间中的最大值即为重合
      // 更新前一个元素的最大值 为第二个值
      res[res.length - 1][1] = intervals[i][1]
    }
    // 数组第二个元素 小于等于当前区间不处理
  }
  return res
}
