/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 循环
var deleteDuplicates = function (head) {
  if (!head) return head
  let curr = head
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
}

// 快慢指针 快指针先走一步 根据值来对比
// var deleteDuplicates = function (head) {
//     if (!head) return head
//     let fast = head.next
//     let slow = head
//     while (fast) {
//         if (fast.val === slow.val) {
//             // 删除fast 更新slow连接 更新fast
//             slow.next = fast.next
//             fast = slow.next
//         } else {
//             // 循环
//             fast = fast.next
//             slow = slow.next
//         }
//     }
//     return head
// }

// 哈希
// var deleteDuplicates = function (head) {
//     let curr = head
//     let m = new Map()
//     while (curr) {
//         let pre = m.get(curr.val)
//         if (pre) {
//             // 删除
//             pre.next = curr.next // 上一个值 直接连接下一个值
//             curr = pre.next // 更新curr
//         } else {
//             m.set(curr.val, curr)
//             curr = curr.next
//         }
//     }
//     return head
// };

