/* eslint-disable no-undef */
/*
 * Author       : OBKoro1
 * Date         : 2021-07-29 23:54:01
 * LastEditors  : OBKoro1
 * LastEditTime : 2023-02-08 12:31:43
 * FilePath     : /web-basics/src/js/callApplyBind/call-apply.js
 * description  : 实现call、apply方法
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

Function.prototype.myCall = function (context, ...paramsArr) {
  //  确定this执行
  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window
  } else {
    context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }
  //  临时储存函数
  const specialPrototype = Symbol('特殊属性Symbol')
  context[specialPrototype] = this
  const result = context[specialPrototype](...paramsArr) //  通过隐式绑定执行函数并传递参数 绑定this
  delete context[specialPrototype] // 删除上下文对象的属性
  return result // 返回函数执行结果
}

//  只改变传参
Function.prototype.myApply = function (context, params) {
  //  确定this执行
  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window
  } else {
    context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }
  // 校验参数
  const paramsArr = Array.isArray(params) ? params : [params]
  //  临时储存函数
  const specialPrototype = Symbol('特殊属性Symbol')
  context[specialPrototype] = this
  const result = context[specialPrototype](...paramsArr) //  通过隐式绑定执行函数并传递参数 绑定this
  delete context[specialPrototype] // 删除上下文对象的属性
  return result // 返回函数执行结果
}
