// 拼多多 pdd-20211109 第二题
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













// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看
// 答案慎看








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


