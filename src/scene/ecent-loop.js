/*
 * @Author       : OBKoro1
 * @Date         : 2021-09-10 11:14:30
 * @LastEditors  : OBKoro1
 * @LastEditTime : 2021-09-10 13:44:42
 * @FilePath     : /js-base/src/scene/ecent-loop.js
 * @description  : 实战event-loop任务优先级
 * 掌握这些任务的优先级：setTimeout、promise.nextTick、setImmediate、promise、
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */
// 


// 答案在下面
setImmediate(function () {
  console.log(1)
}, 0)
setTimeout(function () {
  console.log(2)
}, 0)
new Promise(function (resolve) {
  console.log(3)
  resolve()
  console.log(4)
}).then(function () {
  console.log(5)
})
console.log(6)
process.nextTick(function () {
  console.log(7)
})
console.log(8)






































// 微任务：nextTick比then优先级高      宏任务：setTimeout优先级比setImmediate高
// process.nextTick > promise.then >  setTimeout > setImmediate
// 解析：https://www.jianshu.com/p/a39d3e878d06
// 答案：3 4 6 8 7 5 2 1
