/*
 * Author       : OBKoro1
 * Date         : 2021-10-11 15:08:17
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-10-27 23:20:29
 * FilePath     : /js-base/src/interview/weimeng.js
 * description  :  微盟一面
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved. 
 */

const arr = [{
    id: 0,
    data: 1
}, {
    pid: 0,
    id: 1,
    data: 2
}, {
    pid: 0,
    id: 2,
    data: 3,
}, {
    pid: 2,
    id: 3,
    data: 4
}, {
    pid: 3,
    id: 4,
    data: 5,
}]

// const tree = [{
//     id: 0,
//     data: 1,
//     children: [
//         {
//             pid: 0,
//             id: 1,
//             data: 2,
//         },

//         {
//             pid: 0,
//             id: 2,
//             data: 3,
//             children: [
//                 {
//                     pid: 2,
//                     id: 3,
//                     data: 4
//                 }
//             ]
//         },
//     ]
// }]

function toTree(arr) {

}








// 实现一个函数 超过一定时间 则异步失败

// 补充代码 
function timeout(fn, time) {
}

// const newFetch = timeout(fetch, 10000);

// newFetch('https://foo.com')
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('data', data);
//     })
//     .catch((e) => {
//         console.log('超时', e);
//     });




// 解析数组成树
function toTree(arr) {
    const cache = {} // map映射表 
    const result = [] // 初始化结果
    // 构建映射表
    arr.forEach((item) => {
        cache[item.id] = item
    })
    arr.forEach((item) => {
        const parent = cache[item.pid]
        if (!parent) {
            result.push(item) // 初始化添加元素
        } else {
            // 添加本元素到父元素的children 通过对象指针的引用机制添加到父元素中
            ; (parent.children || (parent.children = [])).push(item)
        }
    })
    // 源数据
    return result
}

// function checkoutArr(oldArr) {
//     let newArr = []
//     function helpFn(item, arr) {
//         if (item.pid === undefined) {
//             newArr.push({
//                 ...item,
//                 children: []
//             })
//             return true
//         }
//         let index = arr.findIndex(arrItem => {
//             return item.pid === arrItem.id
//         })
//         if (index !== -1) {
//             arr[index].children.push({
//                 ...item,
//                 children: []
//             })
//             return true
//         }
//         // 没找到
//         for (let ele of arr.values()) {
//             if (helpFn(item, ele.children)) return true
//         }
//     }
//     oldArr.forEach(element => {
//         helpFn(element, newArr)
//     });
//     return newArr
// }
const toTreeArr = toTree(arr)
console.log('checkoutArr', JSON.stringify(toTreeArr))



// 实现一个函数 超过一定时间 则异步失败
function timeout(fn, time) {
    return function(...params) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('超时')
            }, time)
            fn(...params).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}