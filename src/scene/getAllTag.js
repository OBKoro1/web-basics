// B站: 获取页面中的所有标签名

// 自带的方法

function getAllTagApi() {
  const arr = document.getElementsByTagName('*') // 获取所有标签
  const resArr = []
  for (let i = 0; i < arr.length; i++) {
    const tagName = arr[i].localName // 获取标签名
    // 去重
    if (!resArr.includes(tagName)) {
      resArr.push(tagName)
    }
  }
  return resArr
}

console.log('getAllTagApi', getAllTagApi())

// 正则匹配的方式
function getAllTag() {
  const resArr = []
  const str = document.body.innerHTML
  const reg = /<(\w+)/g // 匹配标签名 加g全局匹配才可循环
  let match = null
  // 循环匹配
  // eslint-disable-next-line no-cond-assign
  while ((match = reg.exec(str))) {
    const tagName = match[1]
    // 去重
    if (!resArr.includes(tagName)) {
      resArr.push(tagName)
    }
  }
  return resArr
}
console.log('111', getAllTag())

// 递归遍历dom的形式
