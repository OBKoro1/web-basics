/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  选择排序 原地比较
var sortList = function (head) {
  let now = head
  while (now) {
    let temp = now // 当前要跟前面比较的值
    let before = head // 指针指向开头
    // 当前值与前面的值比较
    while (before) {
      // 头部的链表循环 全等于当前比较链表 说明前面已经都比较过了 停止循环
      if (temp === before) {
        before = null
        continue
      }
      // 当前值最大值 比之前的值小 互相替换 直到temp替换成最大值
      if (before.val >= temp.val) {
        let count = before.val
        before.val = temp.val
        temp.val = count
      }
      // 循环比较之前值
      before = before.next
    }
    now = now.next // 比较下一个值
  }
  return head
}
