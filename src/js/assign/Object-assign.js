/**
 * description: Object.assign的模拟实现
 * param target [type] 合并的源对象
 * param mergeObjArr [array] 要合并的对象的数组
 * return [Object] 合并后的对象
 */
Object.myAssign = function (target, ...mergeObjArr) {
  target = Object(target) // 普通类型包装成对象 比如字符串 数字等
  for (let i = 0; i < mergeObjArr.length; i++) {
    // 过滤掉要合并的对象为null和undefined的情况
    if (mergeObjArr[i] !== null || mergeObjArr[i] !== undefined) {
      // 遍历要合并对象的属性
      for (let key in mergeObjArr[i]) {
        // in运算符会查找原型对象上的可枚举属性，所以需要通过Object.prototype.hasOwnProperty方法过滤掉对象原型对象上的属性
        if (mergeObjArr[i].hasOwnProperty(key)) {
          target[key] = mergeObjArr[i][key]
        }
      }
    }
  }
  return target
}

// 示例代码
const proto = { p: 'proto' }
const obj1 = { a: 'aa' }
const obj2 = { b: 'bb' }
// 以proto对象为新对象的__proto__
const obj3 = Object.create(proto, {
  c: {
    value: 'cc',
    enumerable: true,
  },
})
console.log(obj3) // {c: 'cc'}
// 输出obj3的构造函数的原型对象
console.log(obj3.__proto__) // {p: 'proto'}



// 说明不会合并原型链(__proto__) 上面的属性
const t1 = Object.myAssign({}, obj1, obj2)
console.log(t1) // {a: "aa", b: "bb"}
// 过滤合并对象为null、undefined的情况
const t2 = Object.myAssign({}, obj1, null, obj2, undefined)
console.log(t2) // {a: "aa", b: "bb"}
// 合并属性
const t3 = Object.myAssign({}, obj1, obj2, obj3)
console.log(t3) // {a: "aa", b: "bb", c: "cc"}
