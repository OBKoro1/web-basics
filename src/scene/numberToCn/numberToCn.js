function trans(num) {}

console.log(trans(1234)) //  一千二百三十四
console.log(trans(123456)) // 十二万三千四百五十六
console.log(trans(12345670)) //  一千二百三十四万五千六百七十
console.log(trans(100010001)) // 一亿零一万零一
console.log(trans(10100010001)) //  一百零一亿零一万零一



// 答案慎看

















































// /**
//  * @description:
//  * 1. 转字符串、倒序循环解析
//  * 2. 对应位数的数字加对应单位，就是该单位应该解析的数字，用数组表示现在位数位置
//  * 3. 去除中间的零，只保留一个零
//  * 4. 去除最后面的零，中文不念0 比如一亿
//  * 5. 后面解析的放在前面，因为是倒序。
//  */
// function trans(num) {
//   const transformObj = {
//     0: '零',
//     1: '一',
//     2: '二',
//     3: '三',
//     4: '四',
//     5: '五',
//     6: '六',
//     7: '七',
//     8: '八',
//     9: '九',
//   }
//   // 到对应位数添加对应单位
//   const rangeArr = ['个', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万']
//   let rangeIndex = 0
//   let res = ''
//   let str = String(num)
//   // 倒序 从后向前 查找单位
//   for (let i = str.length - 1; i >= 0; i--) {
//     let ele = Number(str[i])
//     let cnEle = transformObj[ele] // 中文数字

//     // 1. 个位数不加单位
//     // 2. 超过最大位数限制 不加单位
//     // 3. 数字为零时，不加单位
//     if (rangeIndex > 0 && rangeIndex <= rangeArr.length - 1 && cnEle !== '零') {
//       const rangeEle = rangeArr[rangeIndex] // 单位
//       cnEle = `${cnEle}${rangeEle}` // 中文加单位 比如三+十、五+亿
//     }
//     rangeIndex += 1 // 递进数量单位

//     // 1. 数字最后面的0去掉 比如一亿后面的0不要
//     // 2. 中间只要一个零 比如10000001 中间只有一个零
//     if (cnEle === transformObj[0] && (!res || res[0] === transformObj[0])) {
//       continue
//     }
//     // 倒序 = 后面解析的数字放在前面
//     res = `${cnEle}${res}`
//   }
//   return res
// }

// console.log(trans(1234)) //  一千二百三十四
// console.log(trans(123456)) // 十二万三千四百五十六
// console.log(trans(12345670)) //  一千二百三十四万五千六百七十
// console.log(trans(100010001)) // 一亿零一万零一
// console.log(trans(10100010001)) //  一百零一亿零一万零一











































// /**
//  * @description:
//  * 切割数字为单位
//  * 四位数为一个单位 循环不同量级将数字转化为汉语，并且在对应的十百千增加单位
//  * 循环不同量级单位后面增加'万'、'亿'单位
//  * 遇到前面是零则跳过该case
//  */
// function trans(num) {
//   if (!num) return ''
//   const limitArr = [undefined, '十', '百', '千'] // 四位数一个单位
//   const transformObj = {
//     0: '零',
//     1: '一',
//     2: '二',
//     3: '三',
//     4: '四',
//     5: '五',
//     6: '六',
//     7: '七',
//     8: '八',
//     9: '九',
//   }

//   // 数字range单位
//   const rangeArr = [undefined, '万', '亿'] // 单位

//   const origin = String(num)
//   let originArr = origin.split('').reverse() // 切割数组、单位从小到大排序 在切割range时，不会切错范围
//   let size = 4 // 四位数字升级为一个等级，按照长度切割数量
//   const splitRangeArr = [] // 根据等级范围形成二维数组
//   for (let i = 0; i < originArr.length; i += size) {
//     const range = originArr.slice(i, i + size)
//     const resetSite = range.reverse() // 恢复顺序
//     splitRangeArr.unshift(resetSite) // 将后面的范围出入到前面
//   }
//   const len = splitRangeArr.length
//   let rangeIndex = len - 1 // 默认不超过一万
//   let res = ''
//   for (let i = 0; i < len; i++) {
//     const rangeIndexArr = splitRangeArr[i]
//     let limitIndex = rangeIndexArr.length - 1
//     // 循环当前单位
//     for (let i = 0; i < rangeIndexArr.length; i++) {
//       const item = Number(rangeIndexArr[i])
//       const transformNum = transformObj[item]
//       const ele = limitArr[limitIndex]
//       limitIndex -= 1
//       //  当前为0 并且上一位也是0 跳过
//       if (
//         transformNum === transformObj[0]
//         && res.length
//         && res[res.length - 1] === transformObj[0]
//       ) {
//         continue
//       }
//       // 添加数字转化
//       res += transformNum
//       // 当前为0 不添加单位
//       if (transformNum === transformObj[0]) {
//         continue
//       }
//       // 添加当前单位的十百千
//       if (ele) {
//         res += ele
//       }
//     }
//     // 循环下个单位
//     if (rangeArr[rangeIndex]) {
//       res += rangeArr[rangeIndex]
//       rangeIndex -= 1
//     }
//   }
//   if (res[res.length - 1] === '零') {
//     res = res.substring(0, res.length - 1)
//   }
//   return res
// }

// console.log(trans(1234)) //  一千二百三十四
// console.log(trans(123456)) // 十二万三千四百五十六
// console.log(trans(12345670)) //  一千二百三十四万五千六百七十
// console.log(trans(100010001)) // 一亿零一万零一
// console.log(trans(10100010001)) //  一百零一亿零一万零一
