/*
 * Author       : OBKoro1
 * Date         : 2021-10-13 14:45:44
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-28 18:29:25
 * FilePath     : /js-base/src/scene/traffic-lights.js
 * description  : 红绿灯算法
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 有黄绿红，他们各自亮灯的持续时间是 1s,2s,3s 如此反复。
// 还有暂停开始之类的功能：https://juejin.cn/post/6844903784187953159


function timePromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}
async function setColor(i, color) {
    console.log('设置颜色', color)
    await timePromise(i)
}

async function run() {
    // 这里用了while循环 递归也可以
    while (true) {
        await setColor(3000, "red");
        await setColor(2000, "green");
        await setColor(1000, "yellow");
    }
}

run()