/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
// 两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|

// 桶排序
// 求出矩阵每个点到 (r0, c0) 的曼哈顿距离。
// 既然要按照距离大小排，那就把相同距离的坐标丢到一个数组里（桶），用一个map管理。
// 然后按距离从小到大遍历这些桶，把桶里的坐标，逐个加入结果数组。
var allCellsDistOrder = function (R, C, r0, c0) {
  let res = [] // 结果
  let hash = {} // 桶
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      // 同一距离放进去
      const d = getD(i, j, r0, c0)
      if (!hash[d]) {
        hash[d] = [[i, j]]
      } else {
        hash[d].push([i, j])
      }
    }
  }
  // 最远距离行+列 -1 = R + C - 1
  for (let d = 0; d <= R + C - 1; d++) {
    if (!hash[d]) continue // 没有这个桶 跳过
    for (const pair of hash[d]) {
      res.push(pair)
    }
  }
  return res
}

//  计算曼哈顿距离
var getD = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

// var allCellsDistOrder = (R, C, r0, c0) => {
//     const res = [];
//     const hash = {};

//     for (let i = 0; i < R; i++) {
//         for (let j = 0; j < C; j++) {
//             const d = getD(i, j, r0, c0);
//             if (!hash[d]) {
//                 hash[d] = [[i, j]];
//             } else {
//                 hash[d].push([i, j]);
//             }
//         }
//     }
//     for (let d = 0; d <= R + C - 2; d++) {
//         if (!hash[d]) continue;
//         for (const pair of hash[d]) {
//             res.push(pair);
//         }
//     }
//     return res;
// };

// var getD = (x1, y1, x2, y2) => {
//     return Math.abs(x1 - x2) + Math.abs(y1 - y2);
// };
