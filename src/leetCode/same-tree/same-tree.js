/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // 递归退出
  if (p === null && q === null) {
    return true
  } if (p === null || q === null) {
    // 其中一个空了
    return false
  }
  // 节点值相同
  if (p.val !== q.val) {
    return false
  }
  // 递归子节点
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}
