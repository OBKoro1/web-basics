/**
 * @param {string} s
 * @return {string}
 */
// 栈元素保存下标 以及括号方向
// 赚数组 删除留下undefined 最后再拼接
// 添加所有的左括号
// 右括号 如果上一个元素不是左括号的话 代表不合法 就置空
// 如果是的话 就括号对撞 删除左括号
// 最后留在栈里面的括号 就是要删除的左括号
// 因为左括号会一直加入，到最后可能会有剩余，循环删除栈中 剩余的左括号
// 去掉数组中所有undefined(被删除)的元素
// 转字符串 输出
var minRemoveToMakeValid = function (s) {
  let arr = s.split('')
  let stack = [] // 储存括号的下标 方便后期删除数组中的左括号
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (item === '(') {
      // 添加所有的左括号
      stack.push(i)
    } else if (item === ')') {
      let index = stack[stack.length - 1]
      let stackItem = s[index]
      // 右括号 如果上一个元素不是左括号的话 代表不合法 就置空
      if (stackItem !== '(') {
        arr[i] = undefined
      } else {
        // 如果是的话 就括号对撞 删除左括号
        stack.pop()
      }
    }
  }
  // 最后留在栈里面的括号 就是要删除的左括号
  // 因为左括号会一直加入，到最后可能会有剩余，循环删除栈中 剩余的左括号
  for (let i = 0; i < stack.length; i++) {
    let arrIndex = stack[i]
    arr[arrIndex] = undefined
  }
  // 去掉undefined(被删除)的元素
  const newArr = arr.filter((item) => item)
  return newArr.join('') // 转数组
}
