// reduce的实现原理
Array.prototype.reduce1 = function (cb, prev) {
  for (let i = 0; i < this.length; i++) {
    if (prev === undefined) {
      // 一开始没传值 使用第一个元素当prev 将下一个元素当成curr
      prev = cb(this[i], this[i + 1], i + 1, this)
      i++ // 增加指针
    } else {
      prev = cb(prev, this[i], i, this) // 返回值储存在prev 在下一次循环中传进去
    }
  }
  return prev // 返回结果
}

// 用法
const res = [1, 2, 3, 4, 5].reduce1((prev, curr, index, arr) => prev + curr)

// 多维数组展开
const flatFnn = (arr) => arr.reduce(
  (prev, curr) => (Array.isArray(curr) ? prev.concat(flatFnn(curr)) : prev.concat(curr)), [],
)

let oldArr = [1, [2, [3, [4, [5]]]]]
let newArr = flatFnn(oldArr)
console.log('newArr', newArr)




// 从前包裹后面的函数执行 使用闭包缓存函数执行
const compose = (...fns) => {
  // 返回一个 前面的函数包裹后面的函数执行
  return fns.reduce((a, b) => {
    // 返回一个函数 存储参数
    return (...args) => a(b(...args))
  })
}






const fn1 = function (a, b) {
  return a + b
}

const fn2 = function (str) {
  return `${str}第二个函数处理`
}

const fn3 = function (str) {
  return `${str}第三个函数处理`
}
const final = compose(fn3, fn2, fn1) // 接受函数 从后往前冲
const res2 = final('a', 'b') // 依次执行 返回结果
console.log('res', res2) // ab第二个函数处理第三个函数处理
