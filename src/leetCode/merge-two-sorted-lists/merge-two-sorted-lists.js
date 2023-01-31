/* eslint-disable no-undef */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
 * 递归组建一条链表
 * 1. 把问题变成子问题：递归的最小值
 * 2. 比较链表的值 生成一个新链表 通过递归连接起来
 * 3. 在结束条件直接返回链表的空值
 * 4. 归纳: 回溯 链接起来
 */
var mergeTwoLists = function (l1, l2) {
  let newL = new ListNode(undefined, undefined)
  if (!l1) {
    // l1没有 直接返回l2 链接起来
    return l2
  } if (!l2) {
    // l2没有 直接返回l1 链接起来
    return l1
  }
  // 两个链表都有值 先添加一个小值 剩下一个继续递归生成next链表 这是排序的过程
  if (l1.val >= l2.val) {
    // l2比较小 先添加
    newL.val = l2.val
    newL.next = mergeTwoLists(l1, l2.next)
  } else {
    newL.val = l1.val
    newL.next = mergeTwoLists(l1.next, l2)
  }

  return newL
}

// // 循环 拼接链表
// let mergeTwoLists = function (l1, l2) {
//   let newL = new ListNode()
//   let curr = newL
//   while (l1 || l2) {
//     if (!l1) {
//       // 一条链表没有了 直接返回另一条 链接起来
//       curr.next = l2
//       l2 = null
//     } else if (!l2) {
//       // 一条链表没有了 直接返回另一条 链接起来
//       curr.next = l1
//       l1 = null
//     } else {
//       // 根据指针 拼接节点
//       if (l1.val > l2.val) {
//         curr.next = l2
//         l2 = l2.next
//       } else {
//         curr.next = l1
//         l1 = l1.next
//       }
//       //  移动指针
//       curr = curr.next
//     }
//   }
//   return newL.next
// }
