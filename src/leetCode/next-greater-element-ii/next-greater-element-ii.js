/**
 * 单调栈
 * https://leetcode-cn.com/problems/next-greater-element-ii/solution/dong-hua-jiang-jie-dan-diao-zhan-by-fuxu-4z2g/
 */
var nextGreaterElements = function (nums) {
  let stack = [] // 储存nums中的下标 方便查找nums中的值 以及 设置结果对应下标的下一个大值
  // 初始值-1 没有找到比它大的值 即不操作 -1
  let res = new Array(nums.length).fill(-1)
  let len = nums.length
  // 循环双倍长度 模拟数组循环
  for (let i = 0; i < len * 2; i++) {
    let index = i % len // 对双倍长度 取余求出nums中的下标
    let item = nums[index] // nums中循环值
    // 如果循环值比栈中最后一位大的话 则说明当前循环值为栈中值的下一个更大值
    while (stack.length && nums[stack[stack.length - 1]] < item) {
      let resIndex = stack.pop() // 取出栈中的下标
      res[resIndex] = item // 记录当前循环值为对应结果中的最大值
      // 继续取出栈中的值 比对循环值
    }
    // 入栈 寻找当前值的下一个最大值
    stack.push(index)
  }
  return res
}
