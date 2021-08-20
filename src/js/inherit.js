/*
 * Author       : OBKoro1
 * Date         : 2021-08-06 00:04:42
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-08-06 00:14:11
 * FilePath     : inherit.js
 * description  : ES5继承
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 父类
function supFather(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green']; // 复杂类型
}

supFather.prototype.sayName = function (age) {
    console.log(this.name, 'age')
};
// 子类
function sub(fatherParams, ...sonParams) {
    // TODO: 继承父类的this
    // 借用父类的方法：修改它的this指向,赋值父类的构造函数里面方法、属性到子类上
    supFather.call(this, ...fatherParams)
    this.sonParams = sonParams
}

// TODO: 继承父类的prototype
function inheritPrototype(sonFn, fatherFn) {
    sonFn.prototype = Object.create(fatherFn.prototype); // 浅拷贝父类原型上的属性和方法
    sonFn.prototype.constructor = sonFn; // 修正constructor指向到继承的那个函数上
    sonFn.__proto__ = fatherFn; // 原型对象指向fatherFn
}

inheritPrototype(sub, supFather);
sub.prototype.sayAge = function () {
    console.log(this.age, 'foo')
};

// 实例化子类，可以在实例上找到属性、方法
const instance1 = new sub([24], "OBKoro1");
const instance2 = new sub([18], "小明");
instance1.colors.push('black')

console.log(instance1) 
// {
//     name: 24,
//     colors: [ 'red', 'blue', 'green', 'black' ],
//     sonParams: [ 'OBKoro1' ]
// } 
console.log(instance2) 
// {
//     name: 18,
//     colors: [ 'red', 'blue', 'green' ],
//     sonParams: [ '小明' ]
// }