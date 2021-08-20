// generator 实现原理
// 1. Generator可以理解为一个状态机，内部封装了很多状态，同时返回一个迭代器Iterator对象
// 2. 迭代器可以被多次调用，达到中断函数的功能

// 源函数转化为 以下代码
// function* foo() {
//   yield 'result1'
//   yield 'result2'
//   yield 'result3'
// }
// const gen = foo()
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)

// 1. 生成器函数根据yield语句将代码分割为switch-case块
// 2. 通过切换_context.prev和_context.next来分别执行各个case
function gen$(_context) {
  while (1) { 
    // 通过切换_context.prev和_context.next来分别执行各个case
    switch ((_context.prev = _context.next)) {
      // 生成器函数根据yield语句将代码分割为switch-case块
      case 0:
        _context.next = 2
        return 'result1'

      case 2:
        _context.next = 4
        return 'result2'

      case 4:
        _context.next = 6
        return 'result3'

      case 6:
      case 'end':
        return _context.stop() // 终止
    }
  }
}

// 低配版invoke
let gen = function (activeFunction) {
  // 通过这个对象 储存执行状态
  var context = {
    next: 0, // 下一次执行的位置
    prev: 0, // 本次运行的状态 当next切换的时候
    done: false, // 是否结束
    // 结束函数
    stop: function stop() {
      this.done = true
    },
  }
  // 返回一个迭代器 可以不断调用next
  return {
    next: function () {
      // 根据状态 获取返回值 undefined 或者 下一次执行结果
      value = context.done ? undefined : gen$(context)
      return {
        value,
        done: context.done, // 执行状态
      }
    },
  }
}

// 测试使用
var g = gen()
let res1 = g.next() // {value: "result1", done: false}
let res2 = g.next() // {value: "result2", done: false}
let res3 = g.next() // {value: "result3", done: false}
let res4 = g.next() // {value: undefined, done: true}
console.log('g', g, res1, res2, res3, res4)
