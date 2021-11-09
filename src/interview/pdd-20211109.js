/*
 * Author       : OBKoro1
 * Date         : 2021-11-09 16:45:17
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-09 17:51:43
 * description  : 拼多多-h5/小程序研发工程师 -快团团方向
 */

// 第一题
// 说出输出 并且解释为什么

function Foo() {
  Foo.prototype.a = function () {
    console.log(1)
  }
  this.a = function () {
    console.log(2)
  }
}
Foo.a = function () {
  console.log(3)
}
Foo.prototype.a = function () {
  console.log(4)
}
Foo.a()
let obj = new Foo()
obj.a()
Foo.prototype.a()

// 第二题
// 说出输出 并且解释为什么

async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
async1()
Promise.resolve(1)
  .then((res) => {
    console.log('promise1', res)
  })
  .then((res) => {
    console.log('promise2', res)
    return Promise.reject(1)
  })
  .then((res) => {
    console.log('promise3', res)
  })
  .catch((e) => {
    console.log('promise4', e)
  })
  .then((res) => {
    console.log('promise5', res)
  })
console.log('script end')


// 第三题
// 输入 '(' ')' '[' ']' '{'  '}' 组成的字符串 判断是否正确
// 输入 '()[{}]' true
// '({[}])' false

// 先说一下思路 然后实现代码

function test(str) {

}

// 第四题
// 找到数组中相加为target的两个值
// arr = [ 2, 14, -2 ,9,10,-5,7] target = 9
// 输出对应值的下标: [0,6]

// 先说一下思路 然后实现代码

function findTarget(arr, target) {

}











// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看








// 第一个输出 正确答案

// Foo.a() 3 // 直接找Foo这个函数对象上面的a
// let obj = new Foo()
// obj.a() 2 在this上找到a 不查找原型链
// Foo.prototype.a() 1 // 在构造函数实例化的时候 被重写了



// 第二个输出 正确答案：
// script start
// async1 start 没到await之前都算同步代码
// async2 这也是同步代码 因为没有await
// script end
// async1 end 第一个异步结果
// promise1 1 // promise链式第一个回调
// promise2 undefined 第二个链式 没有返回结果 所以是undefined
// promise4 1 链式回调catch reject的值
// promise5 undefined 没有返回结果
// setTimeout 宏任务回调 异步任务时间短的话 会不断插入到异步队列当中 宏任务需要等待异步任务结束



// 输入 '(' ')' '[' ']' '{'  '}' 组成的字符串 判断是否正确
// 输入 '()[{}]' true
// '({[}])' false

// function test(str) {
//     let stack = [] // 栈
//     // 关闭符和开始符的映射
//     let hash = {
//         ')': '(',
//         ']': '[',
//         '}': '{',
//     }
//     for (let i = 0; i < str.length; i++) {
//         let item = str[i]
//         let isClose = hash[item] // 关闭符 对应的开始符
//         // 如果是关闭的话
//         if (isClose) {
//             let last = stack[stack.length - 1] // 最后一个
//             if (last === isClose) {
//                 // 匹配到开始符
//                 stack.pop() // 出栈
//             } else {
//                 return false // 不匹配
//             }
//         } else {
//             // 不是关闭 入栈
//             stack.push(item)
//         }
//     }
//     if (stack.length === 0) return true
//     return false
// }



// 找到数组中相加为target的两个值
// arr = [ 2, 14, -2 ,9,10,-5,7] target = 9
// 输出对应值的下标: [0,6]

// function findTarget(arr, target) {
//     let hash = {}
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         // 找到目标值
//         if (hash[item]) {
//             return [hash[item], i]
//         }
//         // 没找到
//         let num = target - item
//         hash[num] = i
//     }
//     return false
// }
