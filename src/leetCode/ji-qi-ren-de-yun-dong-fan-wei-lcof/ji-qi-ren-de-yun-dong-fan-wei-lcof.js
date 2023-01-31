// 面试题13. 机器人的运动范围：https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// dfs从起点开始扩散搜索周围的点, 当一个点满足条件后继续向周围搜索。
let movingCount = function (m, n, k) {
  // 初始化二维数组
  let mapArr = new Array(m).fill(0).map((item) => new Array(n).fill(false))
  let res = 0 // 结果
  function dfs(i, j) {
    // 边界
    if (i < 0 || j < 0 || i >= m || j >= n) return
    // 已搜索 剪枝
    if (mapArr[i][j]) return
    if (canEter(i, j)) {
      mapArr[i][j] = true
      res += 1 // 增加结果
      // 遍历右边和下边
      dfs(i + 1, j)
      dfs(i, j + 1)
    }
  }
  dfs(0, 0)
  function canEter(m, n) {
    let count = 0
    // 数位和计算
    while (m !== 0) {
      count += m % 10 // 获取将位后的个位数 获取每个位的值
      m = Math.floor(m / 10) // 降位
    }

    // n数位和计算
    while (n !== 0) {
      count += n % 10
      n = Math.floor(n / 10)
    }
    return count <= k
  }
  return res
}

// bfs 从最近的搜索 搜索完成后再找第二近的
// var movingCount = function (m, n, k) {
//     let res = 0;
//     let mapArr = new Array(m).fill(0).map(item => new Array(n).fill(false))
//     let stack = [[0, 0]];
//     while (stack.length) {
//         let [i, j] = stack.pop()
//         // 边界条件 剪枝
//         if (i >= m || j >= n) continue
//         // 已添加 剪枝
//         if (mapArr[i][j]) continue
//         // 不可到达
//         if (!canEter(i, j)) continue
//         res++ // 添加结果
//         mapArr[i][j] = true // 标记访问
//         // 向右和向下添加元素即可
//         stack.unshift([i + 1, j])
//         stack.unshift([i, j + 1])
//     }
//     // 可以到达
//     function canEter(m, n) {
//         let count = 0
//         // 位数之和
//         while (m !== 0) {
//             count += m % 10 // 位数和添加
//             m = Math.floor(m / 10) // 降位
//         }
//         while (n !== 0) {
//             count += n % 10
//             n = Math.floor(n / 10)
//         }
//         return count <= k
//     }
//     return res
// }
