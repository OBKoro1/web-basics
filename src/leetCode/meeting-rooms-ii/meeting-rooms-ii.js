/**
看了题解以后，觉得自己很SB
使用上车下车算法：
1. 分别对开始时间和结束时间排序。
2. 排序以后用两指针分别迭代两个数组。 使用计数器表示上车和下车的人数，start小的计数器+1，end小的计数器-1，分别表示上车数和下车人数。如果end和start的值一样，说明正好抵消，有人上车的同时有人下车。
3. 需要记录车上某个时刻的最大值， 这个最大值就是需要的会议室的数量。
* */
var minMeetingRooms = function (intervals) {
  if (intervals.length === 0) return 0
  let start = []
  let end = []

  // 排序
  for (let i = 0; i < intervals.length; i++) {
    start.push(intervals[i][0])
    end.push(intervals[i][1])
  }
  start.sort((a, b) => a - b)
  end.sort((a, b) => a - b)

  // 上车下车
  let p1 = 0; let
    p2 = 0 // 指针
  let max = 0 // 记录车上的人数最大值
  let count = 0 // 车上人数
  // p1 是start的指针，p1到最后也就结束了
  while (p1 < start.length) {
    if (start[p1] < end[p2]) {
      // 有人上车
      count++
      p1++
      // 记录车上的人数最大值
      max = Math.max(max, count)
    } else if (start[p1] > end[p2]) {
      // 有人下车
      count--
      p2++
    } else {
      // 时间重合 同时有人上车与下车
      // 开始： count++
      // 结束会议： count--
      p1++
      p2++
    }
  }
  return max
}
