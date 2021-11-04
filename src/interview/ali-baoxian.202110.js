/*
 * Author       : OBKoro1
 * Date         : 2021-10-15 14:56:21
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-04 16:26:45
 * FilePath     : /js-base/src/subject/ali-baoxian.js
 * description  : 蚂蚁金服 保险部门 一面 笔试题
 * 约好时间 打电话过来面试，先给一个小时的时间做四道笔试题
 * koroFileheader VSCode插件
 * Copyright (c) 2021 by OBKoro1, All Rights Reserved.
 */

// 一个小时

// 题目1
// 编写函数convert(money)，传入金额，将金额转换为千分位表示法，如输入 1293213 ，输出 1,293,213
const convert = function (money) {

}
console.log('convert', convert(1293213))



// 题目2 完成 convert2(list) 函数，实现将 list 转为 tree

/**
 * @param list {object[]},
 * @param parentKey {string}
 * @param currentKey {string}
 * @param rootValue {any}
 * @return object
 */

function convert2(list, parentKey, currentKey, rootValue) {

}

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

const result = convert2(list, 'parentId', 'id', 0)
console.log('convert', JSON.stringify(result))



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



// 题目3
// 给定一个未排序的整数数组，找出最长连续序列的长度。
// 示例:
// 输入: [100, 4, 200, 1, 3, 2]
// 输出: 4
// 解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
const longestConsecutive = function (nums) {

}

console.log('longestConsecutive', longestConsecutive([100, 4, 200, 1, 3, 2]))




// 题目4
// 实现一个简单的模板引擎（用replace 和不用 replace）

// 用replace
function template(str) {

}

// 不用replace
// function template(str) {

// }

const tpl = template('<p>hey there {{ name }} {{ name }}</p>')
const res = tpl({ name: 'Neo' })

console.log('template', res)








// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看















// //题目1
// //编写函数convert(money)，传入金额，将金额转换为千分位表示法，如输入 1293213 ，输出 1,293,213
// const convert = function(money) {
//   // 小数点
//   let [integer, decimal] = String.prototype.split.call(money, '.')
//   let s = String(integer) // 数字一般都转字符操作
//   let arr = []
//   let j = 0; // 匹配当前循环的数字 是不是3的倍数
//   // 倒序拼接
//   for (var i = s.length - 1; i >= 0; i--) {
//     arr.push(s[i])
//     j++
//     // 如果是3的倍数  并且前面还有数字的话 加一个,
//     if (j % 3 == 0 && i !== 0) {
//       arr.push(',')
//     }
//   }
//   // 颠倒数组 转字符串
//   integer = arr.reverse().join('')
//   // 小数点
//   if (decimal) {
//     integer = `${integer}.${decimal}`
//   }

//   return integer
// }
// console.log('convert', convert(1293213))



// // 题目2 完成 convert2(list) 函数，实现将 list 转为 tree

// /**
//  * @param list {object[]},
//  * @param parentKey {string}
//  * @param currentKey {string}
//  * @param rootValue {any}
//  * @return object
//  */

// function convert2(list, parentKey, currentKey, rootValue) {
//   // 数据结构初始化
//   let obj = {
//     [currentKey]: rootValue,
//     children: []
//   }
//   let num = 0

//   // 为所有节点 添加到父结构中
//   while (num !== list.length) {
//     list.forEach((item, index) => {
//       if (!item) return
//       // 收集最外层
//       if (item[parentKey] === obj[currentKey]) {
//         obj.children.push({
//           ...item,
//           children: []
//         })
//         list[index] = null
//         num++
//       } else {
//         // 递归找层级
//         helpFn(item, index, obj.children)
//       }
//       // 递归找层级
//     })
//   }
//   // 为item 添加层级
//   function helpFn(item, initIndex, arr) {
//     // 寻找当前层级
//     let index = arr.findIndex(ele => ele[currentKey] === item[parentKey])
//     if (index !== -1) {
//       arr[index].children.push({
//         ...item,
//         children: []
//       })
//       list[initIndex] = null
//       num++
//       return true
//     }
//     // 找他们的子级的元素
//     for (let ele of arr.values()) {
//       if (helpFn(item, index, ele.children)) {
//         // 找到该item的层级 取消递归
//         return true
//       }
//     }
//   }
//   return obj
// }

// const list = [
//   {
//     "id": 19,
//     "parentId": 0,
//   },
//   {
//     "id": 18,
//     "parentId": 16,
//   },
//   {
//     "id": 17,
//     "parentId": 16,
//   },
//   {
//     "id": 16,
//     "parentId": 0,
//   }
// ];

// const result = convert2(list, 'parentId', 'id', 0);
// console.log('convert', JSON.stringify(result))



// const tree = {
//   "id": 0,
//   "children": [
//     {
//       "id": 19,
//       "parentId": 0
//     },
//     {
//       "id": 16,
//       "parentId": 0,
//       "children": [

//         {
//           "id": 18,
//           "parentId": 16
//         },
//         {
//           "id": 17,
//           "parentId": 16
//         }
//       ]
//     }
//   ]
// }



// //题目3
// //给定一个未排序的整数数组，找出最长连续序列的长度。
// //示例:
// //输入: [100, 4, 200, 1, 3, 2]
// //输出: 4
// //解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。
// const longestConsecutive = function(nums) {
//   nums.sort((a, b) => a - b)
//   let max = 0
//   let total = 1 // 当前连续序列长度 默认为1
//   let before = null //  上一个值 用于判断是否为连续序列
//   for (let i = 0; i < nums.length; i++) {
//     if (i === 0) {
//       before = nums[i]
//       continue
//     }
//     // 是否为连续序列
//     if (nums[i] === before + 1) {
//       total++
//       max = Math.max(total, max)
//     } else {
//       // 重置长度
//       total = 1
//     }
//     before = nums[i]
//   }
//   return max
// };

// console.log('longestConsecutive', longestConsecutive([100, 4, 200, 1, 3, 2]))




// //题目4
// //实现一个简单的模板引擎（用replace 和不用 replace）

// // 用replace
// function template(str) {
//   return function(obj) {
//     for (let key in obj) {
//       let reg = new RegExp(`{{\\s*${key}\\s*}}`, 'g');
//       str = str.replace(reg, obj[key])
//     }
//     return str
//   }
// }

// // Vue的方式：拼字符串 使用 new Function + with 模板引擎编译
// // 匹配 截取字符串 装进数组里面
// function template(str) {
//   return function(obj) {
//     let arr = []
//     let reg = new RegExp(`{{\\s*(.+?)\\s*}}`);
//     // 匹配{{}} 添加字符到arr中
//     while (str.length) {
//       let res = reg.exec(str)
//       if (res) {
//         let noMatch = str.slice(0, res.index)
//         str = str.slice(res.index)
//         // 前面没匹配的部分
//         arr.push(`_s('${noMatch}')`)
//         // 匹配到{{ key }} 获取key
//         arr.push(`_getValue('${res[1]}')`)
//         str = str.slice(res[0].length)
//       } else {
//         // 没有匹配了
//         arr.push(`_s('${str}')`)
//         str = ''
//       }
//     }
//     // 获取obj的值
//     obj._getValue = function(key) {
//       return this[key]
//     }
//     // 字符串化
//     obj._s = function(val) {
//       if (typeof val === 'object') return JSON.stringify(val);
//       return val
//     }
//     // arr: ['<p>hey there ', 'name', ' ', 'name', '</p>']
//     let code = arr.join('+')
//     let render = new Function(`with(this){return _s(${code})}`)
//     // 绑定this指向 并执行
//     let template = render.call(obj)
//     return template
//   }
// }


// var tpl = template('<p>hey there {{ name }} {{ name }}</p>');
// let res = tpl({ name: 'Neo' });

// console.log('template', res)
