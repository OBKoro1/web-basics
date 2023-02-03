// 将一个长方形横放改为竖放 每列为一个数组 是大数组的一个元素
var transpose = function (A) {
  let result = []
  // 横向遍历
  for (let i = 0; i < A[0].length; i++) {
    let row = []
    // 纵向遍历
    for (let j = 0; j < A.length; j++) {
      // 添加每列的第一个元素
      row.push(A[j][i])
    }
    result.push(row)
  }
  return result
}
