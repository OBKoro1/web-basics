/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希法
// 1. 以链表为key
// 2. 查找到相同链表 即为相交点
// var getIntersectionNode = function (headA, headB) {
//     let m = new Map() // 以链表为key
//     let curr = headA
//     while (curr) {
//         m.set(curr, curr)
//         curr = curr.next
//     }
//     curr = headB
//     while (curr) {
//         // 查找到相同链表 即为相交点
//         if (m.get(curr)) {
//             return curr
//         }
//         curr = curr.next
//     }
//     return null
// }

// 双指针
// 头节点 headA 到 node 前，共有 a - c 个节点；
// 头节点 headB 到 node 前，共有 b - c 个节点；
// 一长一短的话， 短的先结束变成长的 继续移动节点 这样等长的结束后 变成短的链表 它们的节点数量就相同了(短的变成长的 一直在移动 长的刚变成短的)
// 节点数量相同，一起移动节点就会遇到相交的节点了
var getIntersectionNode = function (headA, headB) {
  let A = headA; let
    B = headB
  while (A !== B) {
    if (A !== null) {
      A = A.next
    } else {
      // A到结尾 变成B链表
      A = headB
    }
    if (B !== null) {
      B = B.next
    } else {
      // B到结尾变成A链表
      B = headA
    }
  }
  return A
}

