/* eslint-disable no-undef */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  let result = new ListNode(null)
  let nextRst = result
  // 进位
  let params = 0 // 传给下一个层级的值
  let val = 0 // 传给当前层级的值

  while (l1 != null || l2 != null) {
    // 链表节点值
    let x = (l1 != null) ? l1.val : 0
    let y = (l2 != null) ? l2.val : 0
    // 当前节点值 取余
    val = (x + y + params) % 10
    // 存储倍数
    params = Math.floor((x + y + params) / 10)
    // 拼接链表
    nextRst.next = new ListNode(val)
    // 指针更新
    nextRst = nextRst.next
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }

  //  可能一条链表比较长 有剩余 拼接
  if (params) {
    nextRst.next = new ListNode(params)
  }
  return result.next
}
