/*
 * Author       : OBKoro1
 * Date         : 2021-10-27 17:43:48
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-27 17:43:50
 * FilePath     : /js-base/src/scene/ promise-allsettled.js
 * description  : promise.allsettled的polify
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 小红书二面

// 编译数组，执行结果的方式
Promise.allSettled = function(promises) {
    return new Promise((resolve, reject) => {
        let total = 0
        let resArr = []
        // 循环promise
        promises.forEach((item, index) => {
            // 执行promise
            Promise.resolve(item).then(res => {
                resArr[index] = {
                    status: 'fulfilled',
                    value: res
                }
                // 记录完成数量 数量达到则返回结果
                total++
                if (total === promises.length) {
                    resolve(resArr)
                }
            }).catch(err => {
                resArr[index] = {
                    status: 'rejected',
                    value: err
                }
                total++
                if (total === promises.length) {
                    resolve(resArr)
                }
            })
        });
    })
}


// 重写数组
Promise.allSettled = function(promises) {
    // 重写每个promise 将结果返回到数组元素中 使其都能成功
    let mappedPromises = promises.map((p) => {
        return p
            .then((value) => {
                // 直接返回结果
                return {
                    status: 'fulfilled',
                    value,
                }
            })
            .catch((reason) => {
                // 直接返回结果
                return {
                    status: 'rejected',
                    value: reason,
                }
            })
    });
    return Promise.all(mappedPromises)
};