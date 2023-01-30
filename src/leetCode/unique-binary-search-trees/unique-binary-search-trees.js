const numTrees = (n) => {
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1 // 空树
  dp[1] = 1 // 一种
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= i - 1; j++) {
      dp[i] += dp[j] * dp[i - j - 1] // 规律 左子树出来的形态有 aa 种，右子树出来的形态有 bb 种，则整个树的形态有 a * ba∗b 种
    }
  }
  return dp[n]
}
