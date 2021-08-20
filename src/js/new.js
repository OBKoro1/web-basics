function myNew(...arr) {
  const [fn, ...params] = arr // 第一个参数为要new的构造函数 其他的为该构造函数的参数
  // TODO: 挂载原型 执行结果
  const target = {} // 挂载原型的对象
  target._proto_ = fn.prototype // 原型连接,target是fn的实例
  const res = fn.apply(target, params) // 执行函数 将this指向构造函数的实例
  // TODO: 判断返回值
  const type = typeof res // 结果的类型
  if (res && (type === 'object' || type === 'function')) {
    return res // 构造函数返回其他对象、或者函数 就返回res
  }
  return target // 否则就返回函数的实例
}
