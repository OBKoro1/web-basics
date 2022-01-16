/*
 * Author       : OBKoro1
 * Date         : 2021-07-30 00:38:46
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 16:20:35
 * FilePath     : /js-base/src/js/debounce-throttle.js
 * description  : 加强版防抖节流与常规防抖、节流
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */
//  加强版防抖 防抖+节流
// 因为防抖有时候触发的太频繁会导致一次响应都没有，我们希望到了固定的时间必须给用户一个响应
function throttlePlus(fn, delay, ...args1) {
  let last = 0
  let timer = null
  return function (...args2) {
    let now = new Date()
    if (now - last > delay) {
      clearTimeout(timer)
      setTimeout(function () {
        last = now
        fn.apply(this, ...args1, ...args2)
      }, delay)
    } else {
      // 这个时候表示时间到了，必须给响应
      last = now
      fn.apply(this, ...args1, ...args2)
    }
  }
}

/**
 * @description: 防抖函数：函数被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时
 * @param {Function} fn 要执行的函数
 * @param {Number} wait  wait毫秒后执行回调
 * @param {*} ...params1 传递给fn的参数
 */
function debounce(fn, wait, ...params1) {
  let timer = null
  return function (...params2) {
    if (timer) {
      // 如果有一个函数在等待执行 清除定时器 下面重新计时
      clearTimeout(timer)
      timer = null // 清空timer 下次重启定时器
    }
    // 设定时器/重置定时器
    timer = setTimeout(() => {
      // wait时间后 执行回调 期间再触发debounce 需要重新等待
      fn.apply(this, ...params1, ...params2) // apply绑定当前执行作用域
    }, wait)
  }
}

// 要防抖的函数
let actionFn = function (a, b) {
  console.log('回调', a, b)
}
const cb = debounce(actionFn, 500, 'actionFn参数1', '参数2')
setInterval(cb, 1000) // 第一次在1500ms后触发，之后每1000ms触发一次
setInterval(debounce(actionFn, 2000), 1000) // 还没执行就一直重复触发,不会执行

/**
 * @description: 节流函数：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行
 * @param {Function} fn 要执行的函数
 * @param {Number} gapTime  单位时间
 * @param {*} ...arr 传递给fn的参数
 */
function throttle(fn, gapTime, ...arr) {
  let last = 0 // 上次执行时间 第一次马上执行
  return function (...params2) {
    let nowTime = Date.now() // 当前时间
    // 当前时间-上次执行的时间是否超过间隔时间 就执行回调
    if (nowTime - last > gapTime) {
      fn.apply(this, ...arr, ...params2) // ...arr为fn的参数
      last = nowTime // 重置上次执行时间为当前时间 方便下次执行
    }
  }
}

setInterval(throttle(actionFn, 1000, 'actionFn参数1', '参数2'), 10)
// 每隔10毫秒都会触发一次throttle，每隔一秒触发一次actionFn回调(1秒内再次触发被丢弃)
