/* eslint-disable no-undef */
// 1. 获取两个链表的值
// 2. 将两个链表的值相加 添加到一个栈中
// PS: 注意最后值 8 + 7 进制的情况。
// 3. 循环栈 组成新链表
function addTwoNumbers(l1, l2) {
  let ten = 0
  let stack1 = []
  let stack2 = []
  // 获取链表的值
  while (l1) {
    stack1.push(l1.val)
    l1 = l1.next
  }
  while (l2) {
    stack2.push(l2.val)
    l2 = l2.next
  }
  // 添加所有值
  let res = []
  while (stack1.length || stack2.length) {
    const item1 = stack1.length ? stack1.pop() : 0
    const item2 = stack2.length ? stack2.pop() : 0
    let num = item1 + item2 + ten // 每个数字的值
    // 处理10进制
    if (num > 9) {
      ten = 1 // 进一位
      num -= 10
    } else {
      ten = 0 // 取消10进
    }
    // 添加当前位值
    res.push(num)
  }
  stack1 = null
  stack2 = null
  // 数组清空了 但是最后的值又进制了
  if (ten === 1) {
    res.push(1)
  }
  // 循环栈 组成新链表
  const newL = new ListNode()
  let cur = newL
  while (res.length) {
    let ele = res.pop()
    cur.next = new ListNode(ele)
    cur = cur.next
  }
  return newL.next
}
