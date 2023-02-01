/* eslint-disable no-cond-assign */
// 栈解法 先入后出 算出里面括号的结果
function decodeString(s) {
  let stack = []
  let res = ''
  let count = 0
  // 扫描每一个字符
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (item >= '0' && item <= '9') {
      // 获取当前循环的数字 如果以前有数字 加上当前的数字 要加10倍。 比如: 100[a]
      count = count * 10 + Number(item)
      continue
    } else if (item === '[') {
      stack.push({ count, lastRes: res }) // 收集以前的结果以及本次的循环次数
      // 重置 收集本次入栈的字符
      res = ''
      count = 0
      continue
    } else if (item === ']') {
      // 先弹出里面的结果
      let { count, lastRes } = stack.pop() // 出栈 这次循环几次字符以及以前收集的字符
      // 外面的栈最后结算 外面的值被认作lastRes添加 比如'dd3[a2[c]]' // 进第一个栈时把dd传进去做lastres
      res = lastRes + res.repeat(count) // 循环的字符串 + 以前收集的字符 拼接
      continue
    }
    res += s[i]
    // 收集当前的字符
    // 不管是单独的: mn2[dd] res = 'mn'
    //  还是入栈的: [abc res = 'abc'
  }
  return res
}

// 递归解法
// function decodeString(s) {
//   const help = (s) => {
//     let res = '' // 前面循环的结果
//     let count = 0 // 倍数
//     for (let i = 0; i < s.length; i++) {
//       let item = s[i]
//       // 递归开启 重置res和count的获取
//       if (item === '[') {
//         // 切割已遍历字符串
//         let newS = s.slice(i + 1)
//         let [newRes, index] = help(newS)
//         i += index // 跳过递归已经遍历的值
//         // 拼接结果
//         res += newRes.repeat(count)
//         count = 0
//         continue
//       } else if (item === ']') {
//         // 递归终止 返回栈的res与指针
//         return [res, i + 1]
//       } else if (item >= '0' && item <= '9') {
//         // 数字倍数处理
//         count = count * 10 + Number(item)
//         continue
//       }
//       res += item
//     }
//     return [res, s.length - 1]
//   }
//   return help(s)[0]
// }



// 正则匹配外层
// function decodeString(s) {
//   let res = '' // 结果
//   // 正则获取数字和字符
//   let reg = /(\d+)\[(.*?)\]/g
//   let match
//   while (match = reg.exec(s)) {
//     let num = match[1]
//     let str = match[2]
//     res += str.repeat(num) // es6 重复字符串多少次
//   }
//   return res
// }
