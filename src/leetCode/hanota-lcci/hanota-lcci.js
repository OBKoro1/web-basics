/**
 * 从最后一根柱子移动到第一根柱子
 * 结束条件 A B 没有元素
 * 归纳
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function (A, B, C) {
  let n = A.length
  let move = function (m, a, b, c) {
    if (m === 1) { // 当只有一个时直接加到c中
      c.push(a.pop())
    } else {
      move(m - 1, a, c, b) // 将 a 上的 n - 1 个 通过 c 移到 b
      c.push(a.pop()) // 把 a 中剩下的一个直接放到 c
      move(m - 1, b, a, c) // 在把 b 上的 n - 1 个 通过 a 放到 c
    }
  }
  move(n, A, B, C)
}
