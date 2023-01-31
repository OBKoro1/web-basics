/**
 * @param {number} n
 * @return {number}
 */

// 动态规划
// 状态转移方程：fn = f(n-1)+f(n-2)+f(n-3)
let waysToStep = function (n) {
  let m = 1e9 + 7
  let resArr = [0, 1, 2, 4] // 缓存结果
  // 从小到大
  for (let i = 4; i <= n; i++) {
    resArr[i] = (resArr[i - 1] + resArr[i - 2] + resArr[i - 3]) % m
  }
  return resArr[n]
}
