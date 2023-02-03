/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let result = []
  // 从1开始
  for (let i = 1; i <= n; i++) {
    result.push(`${i}`)
  }
  result = result.sort() // sort按照字典序排列
  return result
}

// /** 树
//  * @param {number} n
//  * @return {number[]}
//  */
// var lexicalOrder = function (n) {
//   const stack = [9, 8, 7, 6, 5, 4, 3, 2, 1] // 顺序
//   const res = []
//   let i = stack.length; let temp; let
//     front
//   while (i) {
//     while (i--) {
//       front = stack.pop() // 取出前缀
//       if (front === undefined || front > n) continue
//       res.push(front) // 添加前缀
//       for (let i = 9; i >= 0; i--) stack.push(+(`${front}${i}`)) // 该前缀的所有字段添加到末尾 下次就会被添加进字典序中
//     }
//     i = stack.length
//   }
//   return res
// }


