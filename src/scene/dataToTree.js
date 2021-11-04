/*
 * Author       : OBKoro1
 * Date         : 2021-10-27 22:20:12
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 16:08:23
 * FilePath     : /js-base/src/scene/dataToTree.js
 * description  : 数组转tree结构的数据
 * 这道题数据类型有很多变种 各个公司都喜欢出
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */


// 蚂蚁金服-保险 一面笔试题
// interview/ali-baoxian.js

// 题目2 完成 convert2(list) 函数，实现将 list 转为 tree



// 源数据
const list = [
  {
    id: 19,
    parentId: 0,
  },
  {
    id: 18,
    parentId: 16,
  },
  {
    id: 17,
    parentId: 16,
  },
  {
    id: 16,
    parentId: 0,
  },
]

// 转换后的数据结构

const tree = {
  id: 0,
  children: [
    {
      id: 19,
      parentId: 0,
    },
    {
      id: 16,
      parentId: 0,
      children: [

        {
          id: 18,
          parentId: 16,
        },
        {
          id: 17,
          parentId: 16,
        },
      ],
    },
  ],
}

/**
 * @param list {object[]},
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */
function convert2(list, parentKey, currentKey, rootValue) {

}
const result = convert2(list, 'parentId', 'id', 0)
console.log('convert', JSON.stringify(result))



// 微盟一面

// 源数据
const arr = [{
  id: 0,
  data: 1,
}, {
  pid: 0,
  id: 1,
  data: 2,
}, {
  pid: 0,
  id: 2,
  data: 3,
}, {
  pid: 2,
  id: 3,
  data: 4,
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













// 答案慎看


// 蚂蚁金服-保险一面

// function convert2(list, parentKey, currentKey, rootValue) {
//     // 数据结构初始化
//     let obj = {
//         [currentKey]: rootValue,
//         children: []
//     }
//     let num = 0

//     // 为所有节点 添加到父结构中
//     while (num !== list.length) {
//         list.forEach((item, index) => {
//             if (!item) return
//             // 收集最外层
//             if (item[parentKey] === obj[currentKey]) {
//                 obj.children.push({
//                     ...item,
//                     children: []
//                 })
//                 list[index] = null
//                 num++
//             } else {
//                 // 递归找层级
//                 helpFn(item, index, obj.children)
//             }
//             // 递归找层级
//         })
//     }
//     // 为item 添加层级
//     function helpFn(item, initIndex, arr) {
//         // 寻找当前层级
//         let index = arr.findIndex(ele => ele[currentKey] === item[parentKey])
//         if (index !== -1) {
//             arr[index].children.push({
//                 ...item,
//                 children: []
//             })
//             list[initIndex] = null
//             num++
//             return true
//         }
//         // 找他们的子级的元素
//         for (let ele of arr.values()) {
//             if (helpFn(item, index, ele.children)) {
//                 // 找到该item的层级 取消递归
//                 return true
//             }
//         }
//     }
//     return obj
// }


// 微盟一面

// 循环
// function toTree(arr) {
//     const cache = {} // map映射表
//     const result = [] // 初始化结果
//     // 构建映射表
//     arr.forEach((item) => {
//         cache[item.id] = item
//     })
//     arr.forEach((item) => {
//         const parent = cache[item.pid]
//         if (!parent) {
//             result.push(item) // 初始化添加元素
//         } else {
//             // 添加本元素到父元素的children 通过对象指针的引用机制添加到父元素中
//             ; (parent.children || (parent.children = [])).push(item)
//         }
//     })
//     // 源数据
//     return result
// }

// // 递归
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
