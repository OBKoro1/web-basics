// 双指针
let lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set()
  const n = s.length
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1; let
    ans = 0
  for (let i = 0; i < n; ++i) {
    if (i !== 0) {
      // 左指针向右移动一格，移除一个字符
      occ.delete(s.charAt(i - 1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断地移动右指针
      occ.add(s.charAt(rk + 1))
      ++rk
    }
    // 第 i 到 rk 个字符是一个极长的无重复字符子串
    ans = Math.max(ans, rk - i + 1)
  }
  return ans
}

// let lengthOfLongestSubstring = function (s) {
//   let i = 0 // 不重复字符的index
//   let res = 0 // 更新无重复字符的长度
//   for (let j = 0; j < s.length; j++) {
//     // 查找：不重复字符-当前index之间 有没有出现当前字符
//     let index = s.slice(i, j).indexOf(s[j])
//     if (index === -1) {
//       // 更新无重复字符的长度：当前index-不重复字符的index + 长度从1开始算
//       res = Math.max(res, j - i + 1)
//     } else {
//       // 更新i = 不重复字符的index
//       // 不重复字符的index = 原不重复的字符index + i-j中出现重复字符的index + 跳过该重复字符
//       i = i + index + 1
//     }
//   }
//   return res
// }




// 哈希
// let lengthOfLongestSubstring = function (s) {
//   let obj = {} // 用于储存字符出现的位置
//   let res = 0 // 最大值
//   let j = 0 // 不重复字符的index
//   for (let i = 0; i < s.length; i++) {
//     // 当前值是否在对象中存储过
//     const value = obj[s[i]]
//     if (value !== undefined) {
//       // 更新上一次重复值的index
//       // value + 1 跳过之前重复的字符
//       // j: 之前不重复的index 重复字符 需要全部跳过
//       j = Math.max(value + 1, j)
//     }
//     // 每个字符都计算一下最长不重复值 保存最大值
//     // 不重复最长长度 = 当前index - 上一次重复值的index + index从0开始 长度从1开始
//     res = Math.max(res, i - j + 1)
//     // 存/更新 字符串index
//     obj[s[i]] = i
//   }
//   return res
// }
