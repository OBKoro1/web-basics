function find132pattern(nums) {
  let stack = [] // 栈 获取第二小值
  let mid = -Number.MAX_VALUE // 获取中间值 如果这个值有值 就说明有比它大的值 并且在它前面
  // 倒序寻找2 处理位置
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < mid) return true // 如果比最小值大 就说明 有比它小的值 再最大值前面
    while (stack.length && stack[stack.length - 1] < nums[i]) {
      mid = stack.pop() // 比最大值小
    }
    stack.push(nums[i]) // 添加当前值到栈中 寻找第二小值
  }
  return false
}

// var find132pattern = function (nums) {
//     if (nums.length <= 2) return false
//     const min = [nums[0]]
//     const stack = []
//     for (let i = 1; i < nums.length; i++) {
//         min[i] = Math.min(min[i - 1], nums[i])
//     }
//     for (let i = nums.length - 1; i > 0; i--) {
//         // 栈内排除最小值 获取第一个值
//         if (nums[i] > min[i]) {
//             // 栈内数据比最小值大
//             while (stack.length !== 0 && stack[stack.length - 1] <= min[i]) {
//                 stack.pop()
//             }
//             // 栈内数据比当前值小 即满足 l1<l2<l3的需求
//             if (stack.length !== 0 && stack[stack.length - 1] < nums[i]) {
//                 return true
//             }
//             stack.push(nums[i]) // 比最小值大
//         }
//     }
//     return false
// }

// 贪心
// var find132pattern = function (nums) {
//   if (nums.length <= 2) return false
//   let min = nums[0]
//   for (let i = 1; i < nums.length - 1; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       // 当前循环值 比最小值大， 又比主循环值小 即满足
//       if (nums[j] > min && nums[j] < nums[i]) return true
//     }
//     min = Math.min(min, nums[i]) // 更新最小值
//   }
//   return false
// }
