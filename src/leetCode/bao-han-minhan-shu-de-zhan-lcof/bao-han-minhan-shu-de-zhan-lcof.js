/**
 * min_stack 贪心：两个栈，有一个栈中 永远是当前元素中的最小值
 * 两个栈的元素数量相同
 * 添加时，一个正常添加，一个只添加最小值
 */
var MinStack = function () {
  this.stack = [] // 正常栈
  this.min_stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
//
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  // 初始化一个最大值 用于初始添加
  const miniNum = this.min_stack.length === 0 ? Infinity : this.min_stack[this.min_stack.length - 1]
  this.min_stack.push(Math.min(miniNum, x))
}

/**
 * 两个栈数量相同 直接删除
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
  // 元素数量相同可以直接删除
  this.min_stack.pop()
}

/**
 * 正常栈的最后一位元素
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * 最小栈的最小值，取最后一位元素
 */
MinStack.prototype.min = function () {
  // 直接返回最后一个即可
  return this.min_stack[this.min_stack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
