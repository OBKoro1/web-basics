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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// 递归
var isSubtree = function (root, subRoot) {
  if (subRoot === null) return true // 子树为空 说明判断完了
  if (root === null) return false // 父树为空 false
  // 判断父树的左右树 是否和子树相同 判断本树是否和子树相同
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) || isSameRoot(root, subRoot)
  // 是否为相同的树
  function isSameRoot(root1, root2) {
    if (root1 === null && root2 === null) return true // 两个都为空为正确
    if (root1 === null || root2 === null) return false // 一个为空 就false
    if (root1.val !== root2.val) return false // 不相等 false
    return isSameRoot(root1.left, root2.left) && isSameRoot(root1.right, root2.right) // 所有的子节点也要完全相等
  }
}

