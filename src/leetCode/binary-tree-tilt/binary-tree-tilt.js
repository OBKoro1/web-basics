/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 没有值 就是0
 * 获取左右树的和
 * 叠加所有节点的坡度
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
  let total = 0
  const helpFn = (node) => {
    if (!node) return 0
    let left = helpFn(node.left) // 左节点的值
    let right = helpFn(node.right) // 右节点的值
    total += Math.abs(left - right) // 计算每个节点坡度 叠加起来就是整个树的节点坡度
    return left + right + node.val // 返回该节点值
  }
  helpFn(root)
  return total
}
