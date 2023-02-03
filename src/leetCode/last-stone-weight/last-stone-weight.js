/**
 * @param {number[]} stones
 * @return {number}
 */

// 贪心方式
var lastStoneWeight = function (stones) {
  if (stones.length <= 1) return stones[0]
  stones.sort((a, b) => b - a) // 排序 从最大的开始往下粉碎
  let len = stones.length
  // 每次循环去掉一块石头
  while (len--) {
    stones[0] -= stones[1] // 每次从最大的开始往下粉碎
    stones[1] = 0 // 去掉一块石头 往后放
    stones.sort((a, b) => b - a) // 排序 从最大的开始往下粉碎
  }
  return stones[0]
}

// 数组 栈方式
// var lastStoneWeight = function (stones) {
//     if (stones.length === 0) return 0
// stones.sort((a, b) => b - a) // 排序 从最大的开始往下粉碎
//     while (stones.length > 1) {
//         let a = stones.shift()
//         let b = stones.shift()
//         // 每次粉碎两个
//         const num = Math.abs(a - b)
//         // 添加一个结果
//         stones.push(num)
//         stones.sort((a, b) => b - a) // 排序 从最大的开始往下粉碎
//     }
//     return stones.shift()
// };
