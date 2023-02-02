/* eslint-disable no-undef */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 哨兵虚拟节点
var deleteNode = function (head, val) {
  let newHead = new ListNode(null) // 虚拟节点
  newHead.next = head
  let curr = newHead
  let before = newHead // 获取前一个节点
  while (curr) {
    if (curr.val === val) {
      // 删除
      before.next = curr.next
      curr = null
      break
    }
    before = curr
    curr = curr.next
  }
  return newHead.next
}
