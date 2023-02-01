// 环形遍历到底 中途退出
var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  const res = []
  let top = 0
  let bottom = matrix.length - 1
  let left = 0
  let right = matrix[0].length - 1
  // 即使top === bottom 或者 left === right 可能还剩一行或者一列
  while (top <= bottom && left <= right) {
    // 遍历上面和左边
    for (let i = left; i <= right; i++) res.push(matrix[top][i])
    top++ // i = top 如果是最后一项 那么下面一个for循环不会运行
    for (let i = top; i <= bottom; i++) res.push(matrix[i][right])
    right--
    // 当top > bottom 或者 left > right 其中有条边界将交错
    if (res.length === matrix.length) break
    // 遍历右边和下面
    for (let i = right; i >= left; i--) res.push(matrix[bottom][i])
    bottom--
    for (let i = bottom; i >= top; i--) res.push(matrix[i][left])
    left++
  }
  return res
}


// /**
//  * 四层同时遍历 收缩
//  * 剩下一行 或者一列 单独遍历
//  * @param {number[][]} matrix
//  * @return {number[]}
//  */
// var spiralOrder = function (matrix) {
//   if (matrix.length === 0) return []
//   const res = []
//   let top = 0
//   let bottom = matrix.length - 1
//   let left = 0
//   let right = matrix[0].length - 1
//   while (top < bottom && left < right) {
//     for (let i = left; i < right; i++) res.push(matrix[top][i]) // 上层
//     for (let i = top; i < bottom; i++) res.push(matrix[i][right]) // 右层
//     for (let i = right; i > left; i--) res.push(matrix[bottom][i]) // 下层
//     for (let i = bottom; i > top; i--) res.push(matrix[i][left]) // 左层
//     right--
//     top++
//     bottom--
//     left++ // 四个边界同时收缩，进入内层
//   }
//   // 剩下一行，从左到右依次添加
//   if (top === bottom && left <= right) { for (let i = left; i <= right; i++) res.push(matrix[top][i]) }
//   // 剩下一列，从上到下依次添加
//   else if (left === right && top <= bottom) { for (let i = top; i <= bottom; i++) res.push(matrix[i][left]) }
//   return res
// }
