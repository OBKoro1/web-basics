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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let max = 0 // 树的最大直径
  let help = (node) => {
    if (!node) return 0
    let left = help(node.left)
    let right = help(node.right)
    max = Math.max(max, left + right) // 比较树的直径
    return Math.max(left, right) + 1 // 子树的深度
  }
  help(root)
  return max
}
