function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


// 双指针
const removeElements = function (head, val) {
  // 哨兵节点 假的头节点
  let sentinel = new ListNode(0)
  sentinel.next = head
  let pre = sentinel // 前一个节点
  let curr = sentinel.next // 后一个节点
  while (curr) {
    // 头节点相等的情况
    if (curr.val === val) {
      // 删除本节点
      pre.next = curr.next
    } else {
      // 本节点不相等 则记录这个安全节点 用于下次链接
      pre = curr
    }
    curr = curr.next
  }
  return sentinel.next
}
