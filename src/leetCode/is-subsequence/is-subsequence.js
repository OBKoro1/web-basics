/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 双指针
let isSubsequence = function (s, t) {
  const sLength = s.length
  const tLength = t.length
  let s1 = 0
  let t1 = 0
  while (s1 < sLength && t1 < t.length) {
    // 查找s的字符 是否全都存在于t上
    if (s[s1] === t[t1]) {
      s1++ // 查找下一个s字符
      // 全都查找到s1的长度等于sLength
      if (s1 === sLength) {
        return true // 提前退出循环
      }
    }
    t1++ // 指针移动
  }
  return s1 === sLength
}

//  循环查找给定字符串
// var isSubsequence = function (s, t) {
//     let index = 0;
//     for (let i = 0; i < s.length; i++) {
//         // 循环给定字符串 在t中按查找过的索引查找每个字符
//         const strIndex = t.indexOf(s[i], index)
//         if (strIndex !== -1) {
//             // 更新下一次查找位置 从当前索引的下个字符开始查找
//             index = strIndex + 1
//         } else {
//             // 没找到即说明 不是子序列
//             return false
//         }
//     }
//     return true
// };
