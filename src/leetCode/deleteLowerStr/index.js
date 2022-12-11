function handle(str) {
}











// 答案慎看




































// /**
//  * @description:
//  * 1. 思路通过对象的key设置数量
//  * 2. 获取对象中最小的值
//  * 3. 循环字符串，对比最小值与当前字符不相等
//  * 4. 可以输出。
//  * @param {type} str
//  * @return {type} res
//  */
// function handle(str) {
//   let obj = {}
//   let res = ''
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) obj[str[i]]++
//     else obj[str[i]] = 1
//   }
//   let min = Math.min(...Object.values(obj))
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] !== min) res += str[i]
//   }
//   return res
// }


