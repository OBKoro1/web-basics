/**
 * @param {number} n
 * @return {number}
 */

// 变量缓存
let numWays = function (n) {
  let a = 1; let
    b = 1 // 初始值
  for (let i = 2; i <= n; i++) {
    let res = (a + b) % 1000000007; // 取模
    [a, b] = [res, a]
  }
  return a // 每次更新的是a
}

// 数组 动态规划
// var numWays = function (n) {
//     let arr = [1, 1, 2, 3] // 初始化
//     for (let i = 3; i <= n; i++) {
//         let res = arr[i - 1] + arr[i - 2]
// arr[i] = res % 1000000007 // 取模
//     }
//     return arr[n]
// };
