/* eslint-disable no-undef */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 不操作节点值
var swapPairs = function (head) {
  let temp = new ListNode(0)
  temp.next = head // 头部节点缓存
  let pre = temp
  while (pre.next && pre.next.next) {
    const nowNode = pre.next // 当前节点
    const nextNode = pre.next.next // 下一个节点
    pre.next = nextNode // 1. 下个节点拼接 下下一个节点
    nowNode.next = nextNode.next // 下个节点指针指向下下个节点的后面
    nextNode.next = nowNode // 2. 下下个节点 拼接下个节点
    pre = pre.next.next // 3. 指针移动到 下下个节点
  }
  return temp.next
}

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// // 一次循环 每次操作两个值
// var swapPairs = function (head) {
//   let pre = head // 初始节点
//   // 当前值和下一个值都存在 才交换
//   while (pre && pre.next) {
//     const nowVal = pre.val
//     const nextVal = pre.next.val
//     pre.val = nextVal
//     pre.next.val = nowVal
//     // 存在下下个值 获取下下个值 再两两交换
//     if (pre.next.next) {
//       pre = pre.next.next
//     } else {
//       // 不存在下下个值 更新pre 退出循环
//       pre = pre.next
//     }
//   }
//   return head // 返回操作过后的节点
// }
