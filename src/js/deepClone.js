// 深拷贝

// 1. 正则、时间类型处理
// 2. 函数等正常值 返回
// 3. 解决循环引用的问题
function deepClone(obj, hash = new WeakMap()) {
  if (obj == null) return obj
  if (obj instanceof RegExp) return new RegExp(obj) // 处理正则类型数据
  if (obj instanceof Date) return new Date(obj) // 处理正则类型数据
  if (typeof obj !== 'object') return obj // 返回函数等正常值
  if (hash.has(obj)) return hash.get(obj) // TODO: 查询循环引用
  const copy = new obj.constructor() // TODO: 根据constructor实例化数组、对象
  hash.set(obj, copy) // 设置hash值 用于查询循环引用
  for (const key in obj) {
    // 循环对象属性 原型链的值 不拷贝
    if (obj.hasOwnProperty(key)) {
       // TODO: 循环递归拷贝
      copy[key] = deepClone(obj[key], hash)
    }
  }
  return copy
}
