
// dfs 深度遍历
function numberOfPatterns(m, n) {
  let skip = new Array(10).fill(0).map((item) => new Array(10).fill(0))
  // 这个skip数组是为了记录跳跃的点数，比如说从1到3，就跳跃2
  // 而且因为是对称的操作，所以3到1也是如此
  skip[1][3] = skip[3][1] = 2
  skip[1][7] = skip[7][1] = 4
  skip[3][9] = skip[9][3] = 6
  skip[4][6] = skip[6][4] = skip[2][8] = skip[8][2] = 5
  skip[1][9] = skip[9][1] = skip[3][7] = skip[7][3] = 5
  skip[7][9] = skip[9][7] = 8
  let result = 0
  let visited = [] // 记录1-9数字是否被访问过
  // 深度遍历，遍历每一个点到点的次数
  // i=m~n即表示dfs的深度从m到n. 即满足条件的密码长度.
  for (let i = m; i <= n; i++) {
    // 因为从1,3,7,9出发都是对称的，为什么i要减一呢，因为我们是从1出发，先天少了一个节点
    result += DFS(1, visited, skip, i - 1) * 4
    // 2,4,6,8对称
    result += DFS(2, visited, skip, i - 1) * 4
    // 唯独5独立
    result += DFS(5, visited, skip, i - 1)
  }
  function DFS(current, visited, skip, remainKeyCount) {
    if (remainKeyCount === 0) {
      // 无需补充节点(已满足所需密码长度)
      return 1
    }
    // 计入该节点
    let result = 0
    // 将当前访问位置设为true
    visited[current] = true
    // 需要计入的节点数减少1
    remainKeyCount--
    // 从当前节点current尝试往其他节点走
    for (let i = 1; i <= 9; i++) {
      // 看当前的节点到i节点的路径中有没有其他节点在中间
      let crossThroughNumber = skip[current][i]
      // 若i节点没有读过, 且未路过中间节点（visited[crossThroughNumber] || 两节点间没有中间节点（currentThrough=0）, 那么就可以跳转
      if (!visited[i] && (crossThroughNumber === 0 || visited[crossThroughNumber])) {
        result += DFS(i, visited, skip, remainKeyCount)
      }
    }
    // 以current为起点的dfs结束, 回溯. 以避免影响其他节点为起点的dfs
    visited[current] = false
    return result
  }
  return result
}


// /**
//  * @param {number} m
//  * @param {number} n
//  * @return {number}
//  */
// var numberOfPatterns = function(m, n) {
//     let result = 0;
//     let S = {
//       '1 3': 2, '4 6': 5, '7 9': 8, '1 7': 4, '2 8': 5, '3 9': 6, '1 9': 5, '3 7': 5,
//       '3 1': 2, '6 4': 5, '9 7': 8, '7 1': 4, '8 2': 5, '9 3': 6, '9 1': 5, '7 3': 5
//     };
//     for (let i = m; i <= n; i++) helper(i);
//     return result;

//     function helper(n, l = undefined, s = '') {
//       if (n === 0) return result += 1;
//       for (let i = 1; i <= 9; i++) {
//         if (l) {
//           let k = l + ' ' + i;
//           if (s.indexOf(i) === -1) {
//             if (S[k] !== undefined) {
//               if (s.indexOf(S[k]) > -1) helper(n - 1, i, s + i);
//             } else {
//               helper(n - 1, i, s + i);
//             }
//           }
//         } else {
//           helper(n - 1, i, s + i);
//         }
//       }
//     }
//   };
