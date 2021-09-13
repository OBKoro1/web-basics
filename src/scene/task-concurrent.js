/*
 * Author       : OBKoro1
 * Date         : 2021-09-10 13:43:57
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-09-13 12:24:46
 * FilePath     : /js-base/src/scene/task-concurrent.js
 * description  : 异步任务，控制并发数目
 * https://juejin.cn/post/6912220538286899207
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 思路：
// 任务数量通过size来控制
// 添加Promise异步任务，任务数量没达到max并发数 则直接执行异步
// 重要: Promise异步任务结束后 减少size 直接从任务池中取出一个新任务来执行

class taskConcurrent {
    constructor(size) {
        this.max = size
        this.size = 0 // 并发数量控制
        this.taskQueue = [] // 任务队列
    }
    // 生成异步任务对象
    taskFactory(fn, params, resolve, reject) {
        return {
            fn, // 异步任务
            params, // 函数参数
            resolve, // 异步完成
            reject, // 异步错误
        }
    }
    // 添加任务
    addTask(fn, ...params) {
        return new Promise((resolve, reject) => {
            const taskObj = this.taskFactory(fn, params, resolve)
            this.taskQueue.unshift(taskObj)
            if (this.size !== this.max) {
                this.queueOutTask()
            }
        })
    }
    // 从栈中取出任务
    queueOutTask() {
        // 任务池 没有任务了
        if (this.taskQueue.length === 0) {
            return
        }
        // 开始异步任务 增加当前同时并发的任务数量
        this.size++
        const { resolve, fn, params, reject } = this.taskQueue.pop() // 先进先出
        let taskPromise = this.runTask(fn, params, reject)
        // 返回一个promise promise resolve出一个promise 会自动链式调用
        resolve(taskPromise)
    }
    // 执行任务
    runTask(fn, params, reject) {
        // 执行任务 如果返回值不是异步 包装返回值成异步
        const taskPromise = Promise.resolve(fn(...params))
        taskPromise
            .then((res) => {
                console.log('异步结束', res)
                this.pullTask() // 取出新的回调
            })
            .catch((err) => {
                this.pullTask() // 取出新的回调
                reject(err) // 异步失败
            })
        return taskPromise
    }
    // 异步结束 添加新的异步任务
    pullTask() {
        // 上一个任务有结果了 开放一个并发名额出来
        this.size--
        // 从任务池中取出任务 自动执行异步任务
        this.queueOutTask()
    }
}



// 模拟异步任务1
// 调用addTask一个一个添加异步任务
const task = (timeout) =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve(timeout) // 返回值
        }, timeout)
    )
const taskList = [5000, 3000, 1000, 10300, 8000, 2000, 4000, 5000]
async function startNoConcurrentControl() {
    // 初始化并发池
    const cc = new taskConcurrent(2);
    console.time('异步执行时间')
    // 添加所有异步任务
    const resArr = await Promise.all(taskList.map((item) => cc.addTask(task, item)))
    console.log('异步任务返回值', resArr)
    console.timeEnd('异步执行时间')
}
startNoConcurrentControl()

// 模拟异步2 循环添加异步任务
function start() {
    let taskConcurrent2Instance = new taskConcurrent(2)
    let count = 5
    // 组织参数
    while (count--) {
        let p = taskConcurrent2Instance.addTask(task, count * 1000)
        p.then(res => {
            console.log('p', res)
        })
    }
}
start()