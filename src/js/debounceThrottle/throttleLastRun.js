/**
 * @description: 节流函数的最后一次触发必须调用
 * @param {Function} fn 要执行的函数
 * @param {Number} gapTime  单位时间
 * @param {*} ...arr 传递给fn的参数
 */
function throttleLastRun(fn, gapTime, ...arr) {
  let last = 0 // 上次执行时间 第一次马上执行
  let timeout
  return function (...params2) {
    let nowTime = Date.now() // 当前时间
    // 当前时间-上次执行的时间是否超过间隔时间 就执行回调
    let params = [...arr, ...params2]
    if (nowTime - last > gapTime) {
      clearTimeout(timeout) // 清除最后一次
      fn.apply(this, params) // ...arr为fn的参数
      last = nowTime // 重置上次执行时间为当前时间 方便下次执行
    } else {
      clearTimeout(timeout) // 清除上一个最后一次，改为这次为最后一次
      // 最后一次必须执行 在下一次执行之前未被执行 则执行最后一次
      timeout = setTimeout(() => {
        timeout = null
        fn.apply(this, params)
      }, gapTime)
    }
  }
}

// 要防抖的函数
let actionFn = function (a, b) {
  console.log('回调', a, b)
}
setInterval(throttleLastRun(actionFn, 1000, 'actionFn参数1', '参数2'), 500)
