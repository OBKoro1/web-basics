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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  let res = []
  // 后序遍历 左右根
  const help = (node) => {
    if (!node) return
    help(node.left)
    help(node.right)
    res.push(node.val)
  }
  help(root)
  return res
}
