/*
 * Author       : OBKoro1
 * Date         : 2021-07-30 15:00:30
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-11 17:50:21
 * FilePath     : /js-base/src/js/new.js
 * description  : new实现原理
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */
// 思路：执行函数，挂载原型、判断返回值
function myNew(...arr) {
  const [fn, ...params] = arr // 第一个参数为要new的构造函数 其他的为该构造函数的参数
  //  挂载原型 执行结果
  const target = {} // 挂载原型的对象
  target._proto_ = fn.prototype // 原型连接,target是fn的实例
  const res = fn.apply(target, params) // 执行函数 将this指向构造函数的实例
  //  判断返回值
  const type = typeof res // 结果的类型
  if (res && (type === 'object' || type === 'function')) {
    return res // 构造函数返回其他对象、或者函数 就返回res
  }
  return target // 否则就返回函数的实例
}
