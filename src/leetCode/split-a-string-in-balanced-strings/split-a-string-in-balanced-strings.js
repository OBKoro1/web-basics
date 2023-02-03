/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let total = 0
  let num = 0 // 字符的数量
  // 带不动
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      // 为L++
      num++
    } else {
      // 为R--
      num--
    }
    // 贪心：如果L和R的数量相等 num会变为0 即平衡字符串加1
    if (num === 0) {
      total++
    }
  }
  return total
}
