/* eslint-disable no-proto */
/*
 * Author       : OBKoro1
 * Date         : 2021-07-29 23:59:38
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 16:17:48
 * FilePath     : /js-base/src/js/es5-es6extend.js
 * description  : 继承
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

// ES5寄生组合继承实现：
// 父类被继承的对象
function supFather(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green'] // 复杂类型
}
supFather.prototype.sayName = function (age) {
  console.log(this.name, 'age')
}

// 子类
function Sub(name, age) {
  //  借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
  supFather.call(this, name)
  this.age = age
}
//  重写子类的prototype，修正constructor指向
function inheritPrototype(sonFn, fatherFn) {
  sonFn.prototype = Object.create(fatherFn.prototype) // 浅拷贝父类原型上的属性和方法
  sonFn.prototype.constructor = sonFn // 修正constructor指向到继承的那个函数上
}
//
inheritPrototype(Sub, supFather)
// 子类的prototype属性要写在后面 否则会被覆盖
Sub.prototype.sayAge = function () {
  console.log(this.age, 'foo')
}

// 实例化子类，可以在实例上找到属性、方法
const instance1 = new Sub('OBKoro1', 24)
const instance2 = new Sub('小明', 18)
instance1.colors.push('black')
console.log(instance1) // {"name":"OBKoro1","colors":["red","blue","green","black"],"age":24}
console.log(instance2) // {"name":"小明","colors":["red","blue","green"],"age":18}

// 使用ES5实现ES6 extends的例子
//  其实就是上面ES5的寄生组合式继承的那个例子
function Parent(name) {
  this.name = name
}
Parent.sayHello = function () {
  console.log('hello')
}
Parent.prototype.sayName = function () {
  console.log(`my name is ${this.name}`)
  return this.name
}

function Child(name, age) {
  Parent.call(this, name) //  相当于调用super
  this.age = age
}
//  继承原型
function _inherits(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
  Child.__proto__ = Parent
}
_inherits(Child, Parent)

Child.prototype.sayAge = function () {
  console.log(`my age is ${this.age}`)
  return this.age
}
// 测试
const parent = new Parent('Parent')
const child = new Child('Child', 18)
console.log('parent: ', parent) // parent:  Parent {name: "Parent"}
Parent.sayHello() // hello
parent.sayName() // my name is Parent
console.log('child: ', child) // child:  Child {name: "Child", age: 18}
Child.sayHello() // hello
child.sayName() // my name is Child
child.sayAge() // my age is 18
