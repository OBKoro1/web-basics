// 回溯
var restoreIpAddresses = function (s) {
  if (s.length > 12) return []
  let result = []
  fn(s, [], result)
  return result
}
// 递归
function fn(remain, temp, result) {
  // 第四段
  if (temp.length === 3) {
    if (regular(remain)) {
      // 合法即为正确的值
      result.push([...temp, remain].join('.'))
    }
    return
  }
  // 每段长度都可能为1/2/3
  for (let i = 1; i < 4; i++) {
    // 合法才可继续
    if (regular(remain.substr(0, i))) {
      const strArr = [...temp, remain.substr(0, i)] // 字符段
      const str = remain.substr(i) // 剩下的字符串
      fn(str, strArr, result)
    }
  }
}
// 验证合法性
function regular(s) {
  if (!s.length) return false
  return +s >= 0 && +s <= 255 && (s.length > 1 ? !!+s[0] : true)
}
