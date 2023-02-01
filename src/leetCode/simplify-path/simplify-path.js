function simplifyPath(path) {
  let stack = path.split('/') // 根据/切割 转成栈
  let res = [] // 目录结果集
  // 从目录开始 循环栈
  for (let i = 0; i < stack.length; i++) {
    let item = stack[i]
    if (item === '' || item === '.') {
      // .以及多个/不操作
      continue
    } else if (item === '..') {
      if (res.length !== 0) {
        res.pop() // 前一个目录出栈
      }
    } else {
      // 添加目录到后面
      res.push(item)
    }
  }
  // 拼接/符号
  const result = `/${res.join('/')}`
  return result
}
