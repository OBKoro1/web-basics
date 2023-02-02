/* eslint-disable no-restricted-globals */
/* eslint-disable no-inner-declarations */
// 栈+哈希表
const countOfAtoms = function (formula) {
  let i = 0
  const n = formula.length

  const stack = [new Map()] // 初始化压入一个空栈
  while (i < n) {
    const ch = formula[i]
    // 解析一串连续的字母
    function parseAtom() {
      const sb = []
      sb.push(formula[i++]) // 扫描首字母
      // 扫描首字母后的小写字母
      while (i < n && formula[i] >= 'a' && formula[i] <= 'z') {
        sb.push(formula[i++])
      }
      return sb.join('')
    }
    // 解析数字
    const parseNum = () => {
      // 到末尾了 || 不是数字，视作 1
      if (i === n || isNaN(Number(formula[i]))) {
        return 1
      }
      // 获取数字
      let num = 0
      while (i < n && !isNaN(Number(formula[i]))) {
        const base = num * 10 // 如果是多位数字 则扩大十倍
        const now = Number(formula[i]) // 当前数字
        num = base + now // 扫描数字
        i++
      }
      return num
    }

    if (ch === '(') {
      i++
      stack.unshift(new Map()) // 将一个空的哈希表压入栈中，准备统计括号内的原子数量
    } else if (ch === ')') {
      i++
      const num = parseNum() // 括号右侧数字
      const popMap = stack.shift() // 弹出括号内的原子数量
      const topMap = stack[0]
      // 栈中的数量与初始化的栈进行合并字母数量
      for (const [atom, count] of popMap.entries()) {
        let beforeNum = topMap.get(atom) || 0 // 初始化栈中之前的数量
        let nowNum = count * num // 栈中的数量 乘以倍数
        topMap.set(atom, nowNum + beforeNum) // 将括号内的原子数量乘上 num，加到上一层的原子数量中
      }
    } else {
      const atom = parseAtom() // 解析完字母
      const num = parseNum() // 字母后面是否跟着数字
      // 将最外面层级 合并到第一个栈中
      const topMap = stack[0]
      topMap.set(atom, (topMap.get(atom) || 0) + num)
    }
  }
  // 最后都合并到第一个栈中 计算栈中的字母数量
  let map = stack.pop()
  map = Array.from(map)
  map.sort() // 字母顺序排序
  const sb = []
  // 合并字母和数字
  for (const [atom, count] of map) {
    sb.push(atom)
    if (count > 1) {
      sb.push(count)
    }
  }
  return sb.join('') // 输出字符串
}
