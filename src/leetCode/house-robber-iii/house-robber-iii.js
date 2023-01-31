/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * dfs 深度优先
 * @param {TreeNode} root
 * @return {number}
 */
let rob = function (root) {
  const dfs = (node) => {
    // 边界条件
    if (!node) return [0, 0]
    // dfs倒推：left = right = [不偷当前节点的最大值, 偷当前节点的最大值]
    let left = dfs(node.left)
    let right = dfs(node.right)
    let max = []
    // 不偷当前节点的最大值：根据左右儿子偷与不偷的最大值的大小来选择左右儿子偷不偷
    max[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    // 偷当前节点的最大值：不偷两个孩子的最大值 + 本身的值
    max[1] = left[0] + right[0] + node.val
    return max
  }
  // 获取偷与不偷的最大值
  let maxArr = dfs(root)
  return Math.max(...maxArr)
}
