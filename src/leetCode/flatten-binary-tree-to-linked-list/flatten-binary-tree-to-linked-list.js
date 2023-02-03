/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 不能使用先序遍历 因为先序遍历 会导致右侧孩子节点丢失(被右指针覆盖了)。
// 后序遍历 右左根
// 每遍历一个节点就将当前节点的右指针(比当前节点小) 指向上一个节点 因为是后序遍历 所以上一个节点就是比它大的值
var flatten = function (root) {
  if (!root) return null
  let pre = null
  dfs(root)
  function dfs(node) {
    if (!node) return
    dfs(node.right)
    dfs(node.left)
    node.right = pre // 当前节点的右指针 指向上一个节点 上一个节点就是后续遍历 最后一个值 6 5 4 3 2 1
    node.left = null // 左指针清空
    pre = node // 缓存节点
  }
  return pre // 最后pre是root节点 也就是head
}

// 栈：思路：将左子树接到右子树上 将右子树接到左子树后面
// var flatten = function (root) {
//     while (root) {
//         if (!root.left) {
//             // 左子树没值 循环下一个右节点
//             root = root.right
//         } else {
//             // 找左子树的最右边的节点 也就是最大的节点
//             let pre = root.left
//             while (pre.right) {
//                 pre = pre.right
//             }
//             pre.right = root.right
//             // 将左子树插入到右子树的地方
//             root.right = root.left
//             root.left = null
//             // 遍历下一个节点 下一个节点的左子树还没插入到右子树。
//             root = root.right
//         }
//     }
//     return root
// }
