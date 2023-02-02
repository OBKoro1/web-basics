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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // 计算节点高度
  const hightFn = (node) => {
    if (node === null) return 0
    const left = hightFn(node.left)
    const right = hightFn(node.right)
    const height = Math.abs(left - right) // 左右节点高度
    // 如果子节点高度大于1 或者本节点高度大于1 即剪枝
    if (right === -1 || left === -1 || height > 1) {
      return -1
    }
    return Math.max(left, right) + 1 // 本节点的高度
  }
  return hightFn(root) !== -1
}
