
//  5. 最长回文子串


// 中心扩散法
// 两种情况
// 一种是回文子串长度为奇数（如aba，中心是b）
// 另一种回文子串长度为偶数（如abba，中心是b，b）

// 循环遍历字符串 对取到的每个值 都假设他可能成为最后的中心进行判断
/**
 * @param {string} s
 * @return {string}
 */
let longestPalindrome = function (s) {
  if (s.length < 2) {
    return s
  }
  let res = ''
  for (let i = 0; i < s.length; i++) {
    // 回文子串长度是奇数
    helper(i, i)
    // 回文子串长度是偶数
    helper(i, i + 1)
  }

  function helper(m, n) {
    // 从中心 扩散寻找相同字符
    // 相同的代表符合，继续扩散 查找相同的。
    while (m >= 0 && n < s.length && s[m] === s[n]) {
      m--
      n++
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if (n - m - 1 > res.length) {
      // slice也要取[m+1,n-1]这个区间
      res = s.slice(m + 1, n)
    }
  }
  return res
}




// // 动态规划
// let longestPalindrome = function (s) {
//     if (!s || s.length === 0) return ''
//     let res = s[0]

//     const dp = []

//     // 倒着遍历简化操作， 这么做的原因是dp[i][..]依赖于dp[i + 1][..]
//     for (let i = s.length - 1; i >= 0; i--) {
//       dp[i] = []
//       for (let j = i; j < s.length; j++) {
//         // specail case就是一个字符（轴对称点是本身），或者两个字符（轴对称点是介于两者之间的虚拟点）
//         if (j - i === 0) dp[i][j] = true
//         // specail case 1
//         else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true
//         // specail case 2
//         else if (s[i] === s[j] && dp[i + 1][j - 1]) { // 这两个字符相等 并且轴对称
//           // state transition
//           dp[i][j] = true // 当前循环为回文 状态切成轴对称
//         }

//         if (dp[i][j] && j - i + 1 > res.length) {
//           // update res
//           res = s.slice(i, j + 1)
//         }
//       }
//     }

//     return res
//   }


