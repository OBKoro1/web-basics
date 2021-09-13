/*
 * Author       : OBKoro1
 * Date         : 2021-09-13 17:09:38
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-13 17:09:40
 * FilePath     : /js-base/src/scene/await.js
 * description  : 实现一个方法，参数是一个 generator 函数，执行结果是执行完所有 generator 中的 yield
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */


// 实际上考察的是await
// await实现原理: 自动执行generator函数
function await(gen) {
    return new Promise((resolve, reject) => {
        var g = gen() // 获取迭代器 每次执行next 都会更新迭代器。
        // 递归执行迭代器 利用promise异步暂停执行
        function step(val) {
            let res = null
            try {
                res = g.next(val) // 执行下一次迭代 获取await结果
            } catch (err) {
                return reject(err)
            }
            // 判断迭代器结束 递归终止 返回await整体的resolve结果
            if (res.done) {
                resolve(res.value)
                return
            }
            // 等待Promise完成就自动执行下一个next，并传入resolve的值
            Promise.resolve(res.value)
                .then((val) => {
                    step(val)
                })
                .catch((err) => {
                    g.throw(err)
                })
        }
        step() //第一次执行
    })
}

// 测试代码
function* testGeneratorAwait() {
    try {
        const res = yield Promise.resolve(1)
        const res2 = yield 2
        const res3 = yield Promise.resolve(3)
        console.log(res, res2, res3) // 1 2 3
        return 4
    } catch (error) {
        console.log('失败回调', error)
    }
}

console.log('测试代码')
await(testGeneratorAwait)
    .then((res) => {
        console.log('await 执行完毕', res)
    })
    .catch((err) => {
        console.log('await 报错')
    })
