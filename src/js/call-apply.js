Function.prototype.myCall = function (context, ...paramsArr) {
    // TODO: 确定this执行
    if (context === null || context === undefined) {
       // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
        context = window 
    } else {
        context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
    }
    // TODO: 临时储存函数
    const specialPrototype = Symbol('特殊属性Symbol')
    context[specialPrototype] = this;
    let result = context[specialPrototype](...paramsArr); // TODO: 通过隐式绑定执行函数并传递参数 绑定this
    delete context[specialPrototype]; // 删除上下文对象的属性
    return result; // 返回函数执行结果
};

// TODO: 只改变传参
Function.prototype.myApply = function (context, paramsArr) {
    // TODO: 确定this执行
    if (context === null || context === undefined) {
        // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
         context = window 
     } else {
         context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
     }
     // TODO: 临时储存函数
     const specialPrototype = Symbol('特殊属性Symbol')
     context[specialPrototype] = this;
     let result = context[specialPrototype](...paramsArr); // TODO: 通过隐式绑定执行函数并传递参数 绑定this
     delete context[specialPrototype]; // 删除上下文对象的属性
     return result; // 返回函数执行结果
};