
var canCompleteCircuit = function (gas, cost) {
  let cursum = 0 // 记录油箱中的油量
  let sum = 0 // 路程总消耗
  let start = 0 // 起点
  for (let i = 0; i < gas.length; i++) {
    cursum += gas[i] - cost[i] //
    sum += gas[i] - cost[i]
    if (cursum < 0) {
      // 无法从 start 到达 i + 1
      // 所以站点 i + 1 应该是起点
      start = i + 1
      cursum = 0
    }
  }
  if (sum < 0) return -1 // 总汽油花费 大于路程花费
  return start
}


// /**
//  * 贪心
//  * @param {number[]} gas
//  * @param {number[]} cost
//  * @return {number}
//  */
// var canCompleteCircuit = function (gas, cost) {
//   let len = gas.length
//   let spare = 0 // 剩余油量
//   let minSpare = 'init' // 上一轮花费油费 比充油多的情况 保存所有剩余油量
//   let minIndex = 0 // 这个值的下一个值就是充油比花费多的情况
//   for (let i = 0; i < len; i++) {
//     spare += gas[i] - cost[i] //  每个站点的油量剩余相加
//     // 本次花费油量比充的油量要多
//     if (minSpare === 'init' || spare < minSpare) {
//       // 重置当前最低油量 遇到正值才会加
//       minSpare = spare
//       minIndex = i // 下一个值为起点
//     }
//   }
//   // 每个站点的油量剩余相加 如果最后小于0 代表无解  大于0 代表有解
//   return spare < 0 ? -1 : (minIndex + 1) % len
// }
