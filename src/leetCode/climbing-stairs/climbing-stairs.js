
/**
 * @param {number} n
 * @return {number}
 */
let climbStairs = function (n) {
  let dp = [0, 1, 2] // 初始0 1 2 个台阶没有规律
  // 从第三个开始有规律
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

// 动态规划 变量交换
// let climbStairs = function (n) {
//   let pre = 0; let
//     next = 1 // 初始值
//     // 每次循环算出 当次循环的值
//   for (let i = 0; i < n; i++) {
//     [next, pre] = [next + pre, next]
//   }
//   return next
// }

// 递归
// const climbStairs = function (n) {
//     function item(n) {
//         // 递归退出条件
//         if (n === 1) return 1;
//         if (n === 2) return 2;
//         return item(n - 1) + item(n - 2); // 将递归到1个楼梯和两个楼梯 最后反推到n个楼梯
//     }
//     return item(n);
// };
