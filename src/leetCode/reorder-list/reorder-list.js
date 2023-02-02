
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * 1. 添加所有节点
 * 2. 双指针添加节点
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  if (!head) return
  let stack = []
  // 添加所有节点
  while (head) {
    stack.push(head)
    head = head.next
  }
  // 双指针添加节点
  let l = 0
  let end = stack.length - 1
  let newL = new ListNode()
  let cur = newL
  while (l <= end) {
    cur.next = stack[l]
    cur = cur.next
    if (l === end) break // 单数情况 会添加两次 取消一次
    cur.next = stack[end]
    cur = cur.next
    // 移动指针
    l++
    end--
  }
  cur.next = null // 更新最后一个节点的指向
  return newL.next
}

// 1. 找到最后一个节点 删除最后一个节点 防止前面的节点指向错误
// 2. 头节点指向最后一个节点
// 3. 递归改变所有头节点指向最后一个节点
// 4. 返回头节点 链接起来
// const reorderList = function (head) {
//     if (head === null || head.next === null) return
//     let pre = head
//     let last = head.next // 深一层
//     while (last && last.next !== null) {
//         last = last.next // 找到最后一个节点
//         pre = pre.next // 找到最后节点的前一个节点
//     }
//     pre.next = null  // 删除最后一个节点
//     let temp = head.next
//     reorderList(temp) // 对除了第一个节点和最后一个节点进行递归
//     head.next = last // 指向最后一个节点
//     head.next.next = temp // 指向递归后的链表引用
//     return head
// }
