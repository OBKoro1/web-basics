/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 双指针
var reverseList = function (head) {
  let currt = head
  let pre = null // 反转后 开头的next指向null
  while (currt) {
    let temp = currt.next // 缓存下一个值
    currt.next = pre // 连接上一个值
    pre = currt // 指向当前值 当前值 需要连接下一个值
    currt = temp // 指向下一个值 直到没值
  }
  return pre
}

// 递归
// var reverseList = function (head) {
//     if (head == null || head.next == null) {
//         return head // 返回反转后的根节点
//     }
//     // 递归获取链表的最后一个节点
//     const cur = reverseList(head.next)
//     //如果链表是 1->2->3->4->5，那么此时的cur就是5
//     //而head是4，head的下一个是5，下下一个是空
//     //所以head.next.next 就是5->4
//     head.next.next = head // 5.next = 4
//     head.next = null // 4.next = null
//     return cur
// }

// // 获取链表值 循环修改链接值
// var reverseList = function (head) {
//     // 获取链表的值
//     let valRes = []
//     let current = head // 指针
//     while (current && current.val !== undefined) {
//         valRes.push(current.val)
//         current = current.next // 指针移动
//     }
//     current = head // 指针回到开头
//     // 赋值更改原来的链表
//     for (let i = valRes.length - 1; i >= 0; i--) {
//         current.val = valRes[i] // 更改当前节点
//         current = current.next // 指针移动
//     }
//     return head // 返回链表
// };


// 获取链表值 创建新链表 拼接链表
// var reverseList = function (head) {
//     // 获取链表的值
//     let valRes = []
//     let current = head // 指针
//     while (current && current.val !== undefined) {
//         valRes.push(current.val)
//         current = current.next // 指针移动
//     }
//     // 新链表
//     let newL = new ListNode()
//     let createl = newL
//     // 倒序拼接链表
//     for (let i = valRes.length - 1; i >= 0; i--) {
//         createl.next = new ListNode(valRes[i]) // 更改下一个值
//         createl = createl.next // 指针移动
//     }
//     return newL.next || head // next没值 说明head是空的
// };
