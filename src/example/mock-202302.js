/* eslint-disable default-case */
// 本仓库在其他库上引用 web网站、仓库引用
Function.prototype.myCall = function (context, ...params) {
  const fn = this
  let thisObj
  if (context === undefined || context === null) {
    // eslint-disable-next-line no-undef
    thisObj = window
  } else {
    thisObj = Object(context)
  }
  const symbolName = Symbol('特殊属性')
  thisObj[symbolName] = fn
  const res = thisObj[symbolName](...params)
  delete thisObj[symbolName]
  return res
}

Function.prototype.myApply = function (context, params) {
  const fn = this
  let thisObj
  if (context === undefined || context === null) {
    // eslint-disable-next-line no-undef
    thisObj = window
  } else {
    thisObj = Object(context)
  }
  const paramsArr = Array.isArray(params) ? params : [params]
  const symbolName = Symbol('特殊属性')
  thisObj[symbolName] = fn
  const res = thisObj[symbolName](...paramsArr)
  delete thisObj[symbolName]
  return res
}

Function.prototype.myBind = function (context, ...params) {
  const fn = this
  const newFn = function (...params2) {
    let thisObj
    if (context === undefined || context === null) {
      // eslint-disable-next-line no-undef
      thisObj = window
    } else {
      thisObj = Object(context)
    }
    const contextObj = this instanceof newFn ? newFn : thisObj
    const symbolName = Symbol('特殊属性')
    return newFn.call(contextObj, ...params, ...params2)
  }
  if (fn.prototype) {
    newFn.prototype = Object.create(fn.prototype)
  }
  return newFn
}

function curry(fn, ...params) {
  if (fn.length > params.length) {
    return function (...param2) {
      return curry(fn, ...params, ...param2)
    }
  }
  return fn.apply(this, params)
}

function debounce(fn, wait, ...params1) {
  let timeout = null
  return function (...param2) {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn.call(this, ...params1, ...param2)
    }, wait)
  }
}

function throttle(fn, gapTime, ...params) {
  let last = null
  return function (...params2) {
    let now = Date.now()
    if (!last || now - last > gapTime) {
      fn.call(this, ...params, ...params2)
      last = now
    }
  }
}


function throttleLastRun(fn, gapTime, ...params) {
  let last = 0 // 上次执行时间 第一次马上执行
  let timeout = null
  return function (...param2) {
    let now = Date.now()
    if (now - last > gapTime) {
      clearTimeout(timeout)
      timeout = null
      fn.call(this, ...params, ...param2)
      last = now
    } else {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn.call(this, ...params, ...param2)
        timeout = null
      }, gapTime)
    }
  }
}

function deepClone(obj, map = new Map()) {
  if (obj == null) return obj
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)
  if (typeof obj !== 'object') return obj
  if (map.has(obj)) return map.get(obj)
  let copy = obj.constructor() // 生成数组 或者对象 数据
  map.set(obj, copy)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key], map)
    }
  }
  return copy
}

// 将传入的对象作为新对象原型
function myCreate(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}


function father(name) {
  this.name = name
}
father.prototype.a = '1'

function sonFn(age, name) {
  father.call(this, name)
  this.age = age
}
sonFn.prototype = Object.create(father.prototype)
sonFn.prototype.constructor = sonFn
sonFn.prototype.b = '111'


function myIntanceof(left, right) {
  let leftValue = left.__proto__
  let rightValue = right.prototype
  while (true) {
    if (leftValue === null) {
      return false
    }
    if (leftValue === rightValue) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}

let LRUCache = function (max) {
  this.max = max
  this.cache = []
}

LRUCache.prototype.get = function (key) {
  let index = this.cache.findIndex((item) => {
    return item.key === key
  })
  if (index === -1) return -1
  let { value } = this.cache[index]
  this.cache.splice(index, 1)
  this.cache.unshift({
    key, value,
  })
  return value
}

LRUCache.prototype.put = function (key, value) {
  let index = this.cache.findIndex((item) => {
    return item.key === key
  })
  if (index !== -1) {
    this.cache.splice(index, 1)
  } else if (this.cache.length >= this.max) {
    this.cache.pop()
  }
  this.cache.unshift({ key, value })
}

function myNew(...args) {
  const [fn, ...params] = args
  const target = {}
  target.__proto__ = fn.prototype
  const res = fn.apply(target, params)
  const type = typeof res
  if (res !== null && (type === 'object' || type === 'function')) {
    return res
  }
  return target
}


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

function gen(activeFunction) {
  const context = {
    next: 0,
    pre: 0,
    done: false,
    stop() {
      this.done = true
    },
  }
  return {
    next() {
      const value = context.done ? undefined : activeFunction(context)
      return {
        value,
        done: context.done,
      }
    },
  }
}

const g = gen(gen$)
const res1 = g.next() // {value: "result1", done: false}
const res2 = g.next() // {value: "result2", done: false}
const res3 = g.next() // {value: "result3", done: false}
const res4 = g.next() // {value: undefined, done: true}
const res5 = g.next() // {value: undefined, done: true}
console.log('g', g, res1, res2, res3, res4, res5)


function run(gen) {
  return new Promise((resolve, reject) => {
    const g = gen()
    function step() {
      let res = null
      try {
        res = g.next()
      } catch (err) {
        reject(err)
      }
      if (res.done) {
        resolve(res.value)
        return
      }
      Promise.resolve(res.value).then((res) => {
        step(res)
      }).catch((err) => {
        g.throw(err)
      })
    }
    step()
  })
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i
    let temp = arr[i]
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = temp
  }
  return arr
}

function modifiedBubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr.length - i - 1
    for (let j = i; j < num; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}


function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}


// ES6基本类型去重
function unique(arr) {
  return Array.from(new Set(arr))
}

function unique3(arr) {
  if (!Array.isArray(arr)) return
  const array = []
  for (let i = 0; i < arr.length; i++) {
    if (!array.includes(arr[i])) {
      array.push(arr[i])
    }
  }
  return array
}

// 数组对象元素 前面的覆盖后面的
function unique2(arr, key) {
  const result = {}
  const finalResult = []
  arr.forEach((item) => {
    // 只保存第一次出现的数组元素
    if (result[item[key]] === undefined) {
      result[item[key]] = item
    }
  })
  for (const keyName in result) {
    finalResult.push(result[keyName])
  }
  return finalResult
}
