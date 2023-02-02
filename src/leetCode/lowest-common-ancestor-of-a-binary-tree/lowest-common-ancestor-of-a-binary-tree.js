/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root) return null // 递归终止
  if (root === p || root === q) return root // 返回匹配到p和q的节点
  // 获取左右的祖先节点
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  if (!left && !right) return null // 递归终止
  if (left && right) return root // 左右都匹配到了 本节点为最近祖先节点
  // 如果是儿子匹配到了 也只会返回一边
  if (left) return left // 左边匹配到了 返回左边
  if (right) return right // 右边匹配到了返回右边
  return root // 返回根节点
}
