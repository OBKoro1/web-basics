/**
 * 排序 找到这串字符串的每个最大值
 * 只要前面的最大值不与num相同 即证明有优化空间
 * 不相同的话 从后面开始找 先找到的最大值 就是最小的
 */
var maximumSwap = function (num) {
  const str = String(num)
  const numArr = str.split('')
  let res = str.split('')
  // 排序
  res.sort((a, b) => b - a)
  for (let i = 0; i < str.length; i++) {
    // 最大值与字符串不相等
    if (str[i] !== res[i]) {
      // 找到最大值的位置交换目前不等于最大值的数字
      // 最大值的位置从后面开始找 提换后比较大
      numArr.splice(i, 1, Number(res[i])) // 把左侧小于最大值的数字替换成最大值
      let index = str.lastIndexOf(res[i])
      numArr.splice(index, 1, Number(str[i])) // 把当前小于最小值的数字替换最大值
      return Number(numArr.join(''))
    }
  }
  return num
}

// /**
//  * 1. 记录每个数字位置最后出现的地方
//  * 2. 找到比当前字符大的数字字符
//  * 3. 字符出现的位置比当前字符串靠后
//  * 4. 交换
//  * @param {number} num
//  * @return {number}
//  */
// var maximumSwap = function (num) {
//   // 记录每个数字位置最后出现的地方
//   let hash = {
//     0: -1,
//     1: -1,
//     2: -1,
//     3: -1,
//     4: -1,
//     5: -1,
//     6: -1,
//     7: -1,
//     8: -1,
//     9: -1,
//   }
//   // 转数组
//   let numArr = Array.from(num.toString())
//   for (let i = 0; i < numArr.length; i++) {
//     hash[Number(numArr[i])] = i
//   }
//   for (let i = 0; i < numArr.length; i++) {
//     let num1 = Number(numArr[i]) // 当前字符位置
//     // 从大开始循环 找到比大的小的字符
//     for (let d = 9; d > num1; d--) {
//       let index = hash[d]
//       if (index > i) {
//         // 字符出现的位置比当前字符串靠后交换
//         let temp = numArr[index] // 大值
//         numArr[index] = numArr[i] // 小值
//         numArr[i] = temp
//         return Number(numArr.join(''))
//       }
//     }
//   }
//   return num
// }
