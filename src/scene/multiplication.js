/*
 * Author       : OBKoro1
 * Date         : 2021-10-11 18:39:34
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-27 17:35:12
 * FilePath     : /js-base/src/scene/multiplication.js
 * description  : 累乘和累乘缓存
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

// 累乘所有参数
// multiplication(1, 2 , 3) = 1 * 2 * 3 = 6
function multiplication() {
}

console.log('res', multiplication(1, 2, 3))

// 实现累乘缓存
// 缓存输出 1,2, 3 下次 2, 3, 1 也能直接获取结果
function multiplicationCatch() {
}

let multiplicationCatchInstance = multiplicationCatch()


console.log('multiplicationCatch', multiplicationCatchInstance(1, 2, 3), multiplicationCatchInstance(2, 3, 1))















// 答案慎看

// 实现累乘
function multiplication(...params) {
    const res = params.reduce((cur, next) => {
        return cur * next
    }, 1)
    return res
}


// 思路：排序， 字符串化， 存在对象里面
// 取值、计算

// 累乘 缓存
function multiplicationCatch() {
    let map = {}
    return function(...params) {
        params.sort((a, b) => a - b) // 排序参数
        let key = params.join(',')
        // 是否有缓存
        if (map[key]) {
            return map[key]
        } else {
            // 没缓存过
            const res = params.reduce((cur, next) => {
                return cur * next
            }, 1)
            map[key] = res
            return res
        }
    }
}
let multiplicationCatchInstance = multiplicationCatch()


console.log('multiplicationCatch', multiplicationCatchInstance(1, 2, 3), multiplicationCatchInstance(2, 3, 1))
