/**
 * 储存pieces的第一个元素到map中
 * 判断arr中是否存在这个值 如果没有即失败
 * 这个整数数组的后续整数能够连接起来 如果不能即失败
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let m = new Map()
  // 储存pieces的第一个元素到map中
  pieces.forEach((item) => {
    m.set(item[0], item)
  })
  for (let i = 0; i < arr.length; i++) {
    if (!m.has(arr[i])) return false // 判断arr中是否存在这个值 如果没有即失败
    // 这个整数数组的后续整数能够连接起来 如果不能即失败
    let item = m.get(arr[i])
    // 从1开始 0已经通过hash判断了
    for (let j = 1; j < item.length; j++) {
      i++ // 增加arr的指针 保证对应
      if (arr[i] !== item[j]) return false
    }
  }
  return true
}


/**
 * 分别转化成数组
 * 将元素链接起来 如果开头等于arrString 将元素从数组中切割继续递归
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
// var canFormArray = function (arr, pieces) {
//     let arrString = arr.join(',')
//     piecesArr = pieces.map(item => item.join(',')) // pieces的元素都转成字符串
//     let right = false
//     const help = (arr, cur = '') => {
//         for (let i = 0; i < arr.length; i++) {
//             let res
//             // 拼接数组元素
//             if (cur !== '') {
//                 res = `${cur},${arr[i]}`
//             } else {
//                 res = cur + arr[i] // 第一次没有逗号
//             }

//             // 如果开头等于arrString 则表示顺序对了 但是不能保证元素是对的 只能说开头对了 所以要全部循环 才能保证正确拼接
//             if (arrString.startsWith(res)) {
//                 // 数组只剩最后一个元素  拼接完成
//                 if (arr.length === 1 && arrString === res) {
//                     right = true
//                 }
//                 // 拷贝数组 去掉当前拼接的元素
//                 let newArr = arr.slice(0, arr.length)
//                 newArr.splice(i, 1)
//                 help(newArr, res) // 递归
//             }
//         }
//     }
//     help(piecesArr)
//     return right
// }
