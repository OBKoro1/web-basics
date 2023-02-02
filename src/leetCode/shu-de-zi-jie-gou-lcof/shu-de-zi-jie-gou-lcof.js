/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  // 判断节点以及子节点
  const helper = (nodeA, nodeB) => {
    if (!nodeB) return true // B的全都匹配到了 返回true
    if (!nodeA) return false // A的递归完了 返回false
    if (nodeA.val !== nodeB.val) return false // 不相等 返回false
    return helper(nodeA.left, nodeB.left) && helper(nodeA.right, nodeB.right) // 相等 递归子树 子树必须完全相等
  }
  // A和B都不为空 才匹配
  // 匹配当前节点与B || 递归匹配左子树与B ||  递归匹配右子树与B
  return (A !== null && B !== null) && (helper(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
}
