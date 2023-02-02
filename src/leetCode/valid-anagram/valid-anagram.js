/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 排序+双指针
var isAnagram = function (s, t) {
  // 字符串转数组
  let sArr = s.split('')
  let tArr = t.split('')
  if (sArr.length !== tArr.length) return false // 不同数量
  // 对字符串进行排序
  sArr.sort((a, b) => a.localeCompare(b))
  tArr.sort((a, b) => a.localeCompare(b))
  for (let i = 0; i < sArr.length; i++) {
    // 两个字符串数组 有一个元素位置不同 则为错误
    if (sArr[i] !== tArr[i]) {
      return false
    }
  }
  return true
}

// 哈希 计算字符数量
// var isAnagram = function (s, t) {
//     let m = new Map()
//     // 计算s的字符数量
//     for (let key of s) {
//         if (m.has(key)) {
//             let total = m.get(key)
//             m.set(key, total + 1)
//         } else {
//             m.set(key, 1)
//         }
//     }
//     for (let key of t) {
//         // 清空已有字符数量
//         if (m.has(key)) {
//             let total = m.get(key)
//             m.set(key, total - 1)
//             if (total - 1 === 0) m.delete(key)
//         } else {
//             // 有其他值 添加
//             m.set(key, 1)
//         }
//     }
//     return m.size === 0 // map被清空说明两边字符相等 否则数量有差异
// };
