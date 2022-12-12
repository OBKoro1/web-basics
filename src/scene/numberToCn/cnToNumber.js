function trans(num) {}


console.log(trans('一千二百三十四')) //  1234
console.log(trans('十二万三千四百五十六')) // 123456
console.log(trans('一亿零一万零一')) // 100010001
console.log(trans('一百零一亿零一万零一')) //  10100010001


// 答案慎看


















































// /**
//  * @description: 思路
//  * 1. 构建汉语映射数字、量级单位映射单位大小
//  * 2. 通过栈来保存亿、万级单位下，各个千百十单位的总和
//  * 3. 循环中文
//  * 4. 遇到数字保存在栈中，遇到量级单位则弹出数字 乘以单位。
//  * 5. 遇到亿、万跨级别的，则获取栈总和 乘以单位，并清空栈
//  * 5. 最后万级别以下栈内还有数量，需清空
//  */
// function trans(cnStr) {
//   const len = cnStr.length
//   const cnToNumObj = {
//     零: 0, 一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9,
//   }
//   let limitObj = {
//     亿: 100000000,
//     万: 10000,
//     千: 1000,
//     百: 100,
//     十: 10,
//   }
//   let stash = [] // 栈遇到单位清空
//   let res = 0 // 结果
//   // 获取栈中所有的数字总和 用于乘以单位
//   const getStashNum = () => {
//     let temp = 0
//     for (let j = 0; j < stash.length; j++) {
//       temp += stash[j]
//     }
//     stash = []
//     return temp
//   }
//   for (let i = 0; i < len; i++) {
//     const ele = cnStr[i]
//     if (limitObj[ele]) {
//       if (ele === '亿' || ele === '万') {
//         const totalStash = getStashNum() // 获取该单位下所有数字的总和
//         res += totalStash * limitObj[ele] // res = (数字 * 单位)  + res
//       } else {
//         // 十百千量级
//         if (stash.length === 0) stash.push(1) // 以十开头的数字，没有数字，数字是1
//         const num = stash.pop() // 数字
//         stash.push(num * limitObj[ele])
//       }
//     } else {
//       // 零则不处理 不用相加
//       if (cnToNumObj[ele] === '零') {
//         continue
//       }
//       // 添加数字，准备乘以单位
//       stash.push(cnToNumObj[ele])
//     }
//   }
//   res += getStashNum() // 最后万级以下 栈内还有数字
//   return res
// }

// console.log(trans('一千二百三十四')) //  1234
// console.log(trans('十二万三千四百五十六')) // 123456
// console.log(trans('一亿零一万零一')) // 100010001
// console.log(trans('一百零一亿零一万零一')) //  10100010001



