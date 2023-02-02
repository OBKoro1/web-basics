/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) return false
  if (root.left === null && root.right === null) return root.val === sum // 没有节点的子节点 如果数字相同 即说明整条链路数字的和等于sum
  let res = sum - root.val // 减去本节点的值 得到下一节点
  return hasPathSum(root.left, res) || hasPathSum(root.right, res)
}
