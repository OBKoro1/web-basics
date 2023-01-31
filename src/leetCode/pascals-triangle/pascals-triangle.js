/**
 * @param {number} numRows
 * @return {number[][]}
 */
let generate = function (numRows) {
  // 头两层是固定的值
  if (numRows <= 0) return []
  if (numRows === 1) return [[1]]
  if (numRows === 2) return [[1], [1, 1]]
  let arr = [[1], [1, 1]]
  // 根据上一层获取下一层
  function getRows(preRow) {
    let nextRow = []
    // 上一层从第二个元素开始 前后相加 直至最后
    for (let i = 1; i < preRow.length; i++) {
      nextRow.push(preRow[i - 1] + preRow[i])
    }
    // 规律头尾各有一个1
    nextRow.unshift(1)
    nextRow.push(1)
    return nextRow
  }
  // 从第三层开始计算 循环获取下一层
  for (let j = 2; j < numRows; j++) {
    const preRow = arr[j - 1] // 获取上一层
    const nextRow = getRows(preRow) // 通过上一层获取下一层
    arr.push(nextRow) // 添加当前层
  }
  return arr
}
