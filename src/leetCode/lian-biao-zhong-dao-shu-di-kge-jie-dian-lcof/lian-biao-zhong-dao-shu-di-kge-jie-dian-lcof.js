/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 快慢指针
// 快指针先走K步
// 两个指针一起走 快指针到达终点后 返回慢指针
var getKthFromEnd = function (head, k) {
  if (!head) return head // 处理边界情况 空链表直接返回
  let first = head // 快指针
  let sencond = head // 慢指针
  // 快指针先走K步
  for (let i = 0; i < k; i++) {
    first = first.next
  }
  // 两个指针一起走 快指针到达终点后 返回慢指针
  while (first) {
    first = first.next
    sencond = sencond.next
  }
  return sencond
}

/**
 * 递归找层级 从末端开始算层级
 * 找到最后第k个层级 返回该链表
 */
// var getKthFromEnd = function (head, k) {
//     if (!head) return head // 处理边界情况 空链表直接返回
//     let help = (currList) => {
//         // 最后层级
//         if (currList == null) {
//             return 0
//         }
//         let res = help(currList.next)
//         // 判断是否找到层级
//         if (typeof res === 'number') {
//             // 未找到 增加层级
//             res += 1
//         } else {
//             // 找到层级 直接返回链表
//             return res
//         }
//         // 层级相等 找到倒数链表 返回链表
//         if (res === k) return currList
//         // 层级未找到 继续递归
//         if (res < k) return res
//     }
//     return help(head)
// };


// 找到所有层级 根据数量 再遍历一遍 到指定位置停下 返回
