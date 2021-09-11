/*
 * Author       : OBKoro1
 * Date         : 2021-09-11 16:50:09
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-11 17:37:16
 * FilePath     : /js-base/src/scene/event.js
 * description  : 实现一个event类(订阅发布) 含有on off once emit方法
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 订阅发布
class Event {
    constructor() {
        this._events = {}
    }
    // 订阅
    on(type, fn) {
        // 参数检测
        if (!fn instanceof Function) {
            throw '回调必须是函数'
        }
        // 初始化容器
        if (!this._events[type]) {
            this._events[type] = []
        }
        // 添加监听
        if (!this._events[type].includes(fn)) {
            this._events[type].push(fn)
        }
    }
    /**
     * description: 事件触发 通知所有订阅者
     * param type [type] 事件类型
     * param eventData [type] 事件信息 订阅者的数据
     * param _this [type] 订阅者的this挂载
     * return [type]
     */
    emit(type, eventData, _this) {
        if (!this._events[type]) {
            throw '该事件未监听'
        }
        this._events[type].forEach(item => {
            item.call(_this, eventData)
        });
    }
    // 取消订阅
    off(type, fn) {
        // 没有函数就清空
        if (!fn) {
            this._events[type] = []
            return
        }
        // 使用filter 不使用splice 因为splice删除当前元素会影响当前emit遍历 导致事件触发不完整
        this._events[type] = this._events[type].filter(item => item !== fn)
    }

    // 订阅一次
    once(type, fn) {
        let self = this
        // 重写函数
        const reWriteFn = function(eventData) {
            fn.call(this, eventData)
            self.off(type, reWriteFn) // 执行后卸载
        }
        // 传入
        this.on(type, reWriteFn)
    }
}

// 测试代码
let e = new Event;
// 订阅
e.on("click", (msg) => {
    console.log(1, msg, this);
})
function testOff(msg) {
    console.log(2, msg, this)
}
e.on("click", testOff)
function fn3(msg) {
    console.log(3, msg, this);
}
// 订阅一次
e.once("click", fn3);
function fn4(msg) {
    console.log(4, msg, this);
}
e.once("click", fn4);
console.log(e);
// 通知事件更新
let obj = {
    a: '传入的this对象'
}
e.emit('click', '事件数据', obj)
console.log(e);
e.off("click", testOff)
console.log('off取消订阅', e);
