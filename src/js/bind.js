/*
 * Author       : OBKoro1
 * Date         : 2021-08-05 23:53:37
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 17:15:51
 * FilePath     : /js-base/src/js/bind.js
 * description  : 实现bind函数
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

// 思路
// 拷贝源函数:
//  通过变量储存源函数
//  使用Object.create复制源函数的prototype给fToBind
// 返回拷贝的函数
// 调用拷贝的函数：
//  new调用判断：通过instanceof判断函数是否通过new调用，来决定绑定的context
//  绑定this+传递参数
//  返回源函数的执行结果

Function.prototype.myBind = function (target, ...params) {
  const thisFn = this // 存储源函数以及上方的params(函数参数)
  // 对返回的函数 secondParams 二次传参
  const fToBind = function (...secondParams) {
    //  确定context 上下文
    const isNew = this instanceof fToBind // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
    const context = isNew ? this : Object(target) // new调用就绑定到this上,否则就绑定到传入的target上
    //  绑定this的指向并传递参数,返回执行结果
    return thisFn.call(context, ...params, ...secondParams)
  }
  //  复制源函数的prototype给fToBind 一些情况下函数没有prototype，比如箭头函数
  if (thisFn.prototype) {
    fToBind.prototype = Object.create(thisFn.prototype)
  }
  return fToBind // 返回拷贝的函数
}
