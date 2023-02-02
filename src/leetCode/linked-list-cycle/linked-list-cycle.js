/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针
// 快指针每次走两步 如果是环状 他们总会相遇 遇到即环状
var hasCycle = function (head) {
  let fast = head
  let slow = head
  while (fast && slow) {
    // 快指针走两步
    fast = fast.next
    if (fast) {
      fast = fast.next
    } else {
      // 到末尾 说明不是环状
      return false
    }
    // 走一步
    slow = slow.next
    // 相同 为环状
    if (fast === slow) {
      return true
    }
  }
  // 如果它们为null 说明不是环状
  return false
}

// 哈希 以链表为key 如果有key 则为环
// var hasCycle = function (head) {
//     let m = new Map()
//     let curr = head
//     while (curr) {
//         // 如果有key 则为环
//         if (m.get(curr)) {
//             return true
//         }
//         // 以链表为key
//         m.set(curr, 1)
//         curr = curr.next
//     }
//     return false
// };
