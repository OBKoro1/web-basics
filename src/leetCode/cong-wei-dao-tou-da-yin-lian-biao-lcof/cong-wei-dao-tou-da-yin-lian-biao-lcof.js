/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var reversePrint = function (head) {
  let curr = head
  let res = []
  while (curr) {
    res.unshift(curr.val) // 从头部插入
    curr = curr.next
  }
  return res
}
