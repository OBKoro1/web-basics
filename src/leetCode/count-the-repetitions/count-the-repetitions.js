let getMaxRepetitions = function (s1, n1, s2, n2) {
  // 字符串转成数组
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  let k = 0 // s2指针
  const S1Len = arr1.length * n1 // S1的长度
  for (let j = 0; j < S1Len; j++) {
    // 取余获得index
    const s1Index = j % arr1.length
    const s2Index = k % arr2.length
    if (arr1[s1Index] === arr2[s2Index]) k++ // 匹配到字符 指针增加
  }
  const S2Len = arr2.length * n2 // S2的长度
  return (k / S2Len) | 0
}
