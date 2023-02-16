// 将传入的对象作为新对象原型
function myCreate(obj) {
  function F() {}
  F.prototype = obj
  return new F()
}
const obj1 = { p: 1 }
const obj2 = Object.create(obj1)
obj1.p = 2
console.log('obj', obj1, obj2)
