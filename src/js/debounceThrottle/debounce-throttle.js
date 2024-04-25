/*
 * Author       : OBKoro1
 * Date         : 2021-07-30 00:38:46
 * LastEditors  : OBKoro1 1677593011@qq.com
 * LastEditTime : 2024-04-21 13:14:07
 * FilePath     : /web-basics/src/js/debounceThrottle/debounce-throttle.js
 * description  : 加强版防抖节流与常规防抖、节流
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

/**
 * @description: 防抖函数：函数被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时
 * @param {Function} fn 要执行的函数
 * @param {Number} wait  wait毫秒后执行回调
 * @param {*} ...params1 传递给fn的参数
 */
function debounce(fn, wait, ...params1) {
  // params1 = 初始化debounce时的参数
  let timer = null;
  return function (...params2) {
    // params2 = 调用函数时的参数
    if (timer) {
      // 如果有一个函数在等待执行 清除定时器，已执行过了 也可以重新计时
      clearTimeout(timer);
      timer = null; // 上次是否执行不重要 清空timer 直接重启定时器
    }
    // 设定时器/重置定时器
    timer = setTimeout(() => {
      // wait时间后 执行回调 期间再触发debounce 需要重新等待
      fn.apply(this, [...params1, ...params2]); // apply绑定当前执行作用域
    }, wait);
  };
}

// 要防抖的函数
let actionFn = (...params) => {
  console.log('回调', params);
};
const cb = debounce(actionFn, 500, 'actionFn参数1', '参数2');
setInterval(cb, 1000); // 第一次在1500ms后触发，之后每1000ms触发一次
setInterval(debounce(actionFn, 2000), 1000); // 还没执行就一直重复触发,不会执行

/**
 * @description: 节流函数：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行
 * @param {Function} fn 要执行的函数
 * @param {Number} gapTime  单位时间
 * @param {*} ...arr 传递给fn的参数
 */
function throttle(fn, gapTime, ...arr) {
  let last = 0; // 上次执行时间 第一次马上执行
  return function (...params2) {
    let nowTime = Date.now(); // 当前时间
    // 当前时间-上次执行的时间是否超过间隔时间 就执行回调
    if (nowTime - last > gapTime) {
      // apply 参数是 Array
      fn.apply(this, [...arr, ...params2]);
      last = nowTime; // 重置上次执行时间为当前时间 方便下次执行
    }
  };
}

setInterval(throttle(actionFn, 1000, 'actionFn参数1', '参数2'), 10);
// 每隔10毫秒都会触发一次throttle，每隔一秒触发一次actionFn回调(1秒内再次触发被丢弃)
