/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 快慢指针 优点： 只用遍历一半长度
// 快指针走两步 慢指针走一步
var middleNode = function (head) {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}

// 数组 获取所有节点 除以2 返回中间节点
