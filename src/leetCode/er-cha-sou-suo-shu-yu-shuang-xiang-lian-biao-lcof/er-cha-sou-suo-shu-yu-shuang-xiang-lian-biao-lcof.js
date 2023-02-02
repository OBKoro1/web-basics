/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// 深度递归 拿到头部 链接前一个值 改变指针 退出当前函数 在第二个函数一开始的时候 链接后一个值
// 递归结束在拿到尾部 链接头尾
var treeToDoublyList = function (root) {
  if (!root) return null
  let head = null
  let pre = null
  dfs(root)
  // pre是尾部  递归结束
  // 链接头尾
  head.left = pre
  pre.right = head
  function dfs(node) {
    if (!node) return
    dfs(node.left)
    if (pre) {
      // 链接一边2：有前一个值 前一个值链接后一个值
      pre.right = node
    } else {
      // 找到链表头部：进入 深度递归 找到最深一层 没有前一个值 找到head
      head = node
    }
    // 链接一边1， 更改指针 退出函数 链接另一边
    node.left = pre
    pre = node
    dfs(node.right)
  }
  return head
}

// 栈递归
// var treeToDoublyList = function (root) {
//     if(!root) return null
//     let stack = []
//     let head = null
//     let pre = null
//     let cur = root
//     while (cur || stack.length) {
//         // 递归找节点
//         while (cur) {
//             stack.push(cur)
//             cur = cur.left
//         }
//         cur = stack.pop() // 取出最后面的节点
//         if (pre) {
//             pre.right = cur
//         } else {
//             head = cur
//         }
//         // 链接节点1
//         cur.left = pre
//         pre = cur
//         cur = cur.right // 修改指针 取出右节点
//     }
//     // pre尾节点
//     head.left = pre
//     pre.right = head
//     return head
// }
