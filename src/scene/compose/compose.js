// 题目需求
// 实现compose函数, 类似于koa的中间件洋葱模型

let middleware = []
middleware.push((context, next) => {
  console.log(1)
  next()
  console.log(1.1)
})
middleware.push((context, next) => {
  console.log(2)
  next()
  console.log(2.1)
})
middleware.push((context, next) => {
  console.log(3)
  next()
  console.log(3.1)
})

let fn = compose(middleware)
fn()

/*
1
2
3
3.1
2.1
1.1
*/

function compose(middleware) {

}




// 答案慎看























// /**
//  * @description: 思想
//  * 本质上是递归 通过数组下标，进行迭代,
//  * 执行当前迭代的next函数，遇到下一次迭代的nextFn，执行下一次迭代。
//  * next函数可能是个promise需要使用Promise.resolve(p)
//  * 限制是数组下标超过则return，数组到了最后一个元素， 需要再执行一次next函数，因为compose也可能传递next函数
//  */
// function compose(middleware) {
//   return function fn(context, next) {
//     return dispatch(0) // 初始化调用
//     function dispatch(i) {
//       if (i > middleware.length - 1) return // 循环结束限制
//       let fn = middleware[i] // 获取函数
//       if (i === middleware.length) fn = next // 最后执行的next
//       if (!fn) return Promise.resolve() // 没有item
//       const nextFn = dispatch.bind(null, i + 1) // 绑定下一个next的fn
//       const p = fn(context, nextFn) // 执行当前迭代的next, 遇到下一次迭代的nextFn 执行nextFn
//       try {
//         return Promise.resolve(p) // fn可能是个promise，需要resolve来等待一下
//       } catch (err) {
//         return Promise.reject(err)
//       }
//     }
//   }
// }
