/* eslint-disable no-undef */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 快慢指针
let removeNthFromEnd = function (head, n) {
  const preHead = new ListNode(0)
  preHead.next = head // 头节点
  let fast = preHead
  let slow = preHead
  // 快指针先走N步
  while (n--) {
    fast = fast.next
  }
  // 快慢一起前进 快指针先停下到结尾了 慢指针的下一个值就是要删除的节点
  while (fast && fast.next) {
    fast = fast.next
    slow = slow.next
  }
  // 删除第n个节点
  slow.next = slow.next.next
  return preHead.next
}

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// // 数组形式
// let removeNthFromEnd = function (head, n) {
//   const arr = []
//   // 获取所有节点
//   while (head) {
//     arr.push(head.val)
//     head = head.next
//   }
//   // 从数组删除节点
//   const num = arr.length - n
//   arr.splice(num, 1)
//   let preHead = new ListNode(0)
//   let res = preHead
//   //  重新拼接节点
//   arr.forEach((item) => {
//     res.next = new ListNode(item)
//     res = res.next
//   })
//   return preHead.next
// }
