// 单调栈
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length
  let res = new Array(len).fill(0) // 初始化数组 默认都没有更大的
  let stack = [] // 单调栈
  for (let i = len - 1; i >= 0; i--) {
    // 获取栈中的值与当前值对比
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      // 气温低的删除
      stack.pop()
    }
    if (stack.length) {
      // 找到未来几天气温更高的 = 大值下标 - 小值下标
      res[i] = stack[stack.length - 1] - i
    }
    // 添加当前值
    stack.push(i)
  }
  return res
}


// 对已有结果进行跳跃
// 1. 从右向左
// 2. j += res[j] 利用已有结果进行跳跃 [ 0, 2, 1, 1, 从2跳到这个位置进行比较]
// 3. res[j] === 0 说明后面没有比这个值大的 没必要循环了
// 4. 返回结果
// var dailyTemperatures = function (temperatures) {
//     const len = temperatures.length
//     let res = []
//     for (let i = len - 1; i >= 0; i--) {
//         res[i] = 0 // 初始化
//         // 从当前值的后面开始查找高的温度
//         // j += res[j] 利用已有结果进行跳跃 [ 0, 2, 1, 1, 从2跳到这个位置进行比较]
//         // [21, 20, 18, 19 ,25] 从20跳到25
//         for (j = i + 1; j < len; j += res[j]) {
//             if (temperatures[i] < temperatures[j]) {
//                 res[i] = j - i
//                 break
//             } else if (res[j] === 0) {
//                 // j 说明后面没有比这个值大的 没必要循环了
//                 res[j] = 0
//                 break
//             }
//         }
//     }
//     return res
// }



/**
 * 双循环 暴力解法
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function (temperatures) {
//     let res = []
//     const len = temperatures.length
//     for (let i = 0; i < len; i++) {
//         let item = temperatures[i];
//         // 寻找每个值比它大的
//         for (let j = i; j < len; j++) {
//             // 找到比当前值大的
//             if (item < temperatures[j]) {
//                 res[i] = j - i // 设置差几天
//                 break
//             }
//             // 后面没值了 为0
//             if (j === len - 1) {
//                 res[i] = 0
//             }
//         }
//     }
//     return res
// };
