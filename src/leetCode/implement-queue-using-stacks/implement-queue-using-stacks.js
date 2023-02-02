/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = []
  this.outStack = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  // 输出栈为空 则将输入栈弹入输入栈 更改顺序为从尾到头
  if (!this.outStack.length) {
    this.in2out()
  }
  return this.outStack.pop() // 从队列头先输出
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  // 输出栈为空 则将输入栈弹入输入栈 更改顺序为从尾到头
  if (!this.outStack.length) {
    this.in2out()
  }
  return this.outStack[this.outStack.length - 1] // 返回队列头元素
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0 && this.outStack.length === 0
}

// 更改第一个栈中的顺序 从尾到头
MyQueue.prototype.in2out = function () {
  if (this.stack.length) {
    while (this.stack.length) {
      this.outStack.push(this.stack.pop())
    }
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
