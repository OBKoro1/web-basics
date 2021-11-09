/*
 * Author       : OBKoro1
 * Date         : 2021-11-09 17:53:41
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-09 18:01:18
 * description  : 拼多多 原型链输出
 */



// pdd-20211109 拼多多 原型链输出
// 第一题
// 说出输出 并且解释为什么

function Foo() {
  Foo.prototype.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.a = function () {
  console.log(3)
}
Foo.prototype.a = function () {
  console.log(4)
}
Foo.a()
let obj = new Foo()
obj.a()
Foo.prototype.a()













// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看








// 第一个输出 正确答案

// Foo.a() 3 // 直接找Foo这个函数对象上面的a
// let obj = new Foo()
// obj.a() 2 在this上找到a 不查找原型链
// Foo.prototype.a() 1 // 在构造函数实例化的时候 被重写了


