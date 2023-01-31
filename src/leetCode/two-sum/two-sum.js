/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
  // 1. 设置一个map映射表
  let map = {}
  let answer = []
  // 2. 循环值 如果在表内找到对应的映射
  for (const [index, value] of nums.entries()) {
    // 查找是否已经有对应结果了
    const countIndex = map[String(value)]
    if (countIndex !== undefined) {
      answer.push(countIndex, index) // 添加索引
      break
    }
    const count = target - value // 对应结果
    map[count] = index // 当前索引
  }
  // 3. 即return
  return answer
}
