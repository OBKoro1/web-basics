/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 广度优先
var maxDepth = function (root) {
  if (root === null) return 0
  let stack = [root] // 初始化层级
  let max = 0
  while (stack.length) {
    let len = stack.length
    // 在栈中删除所有当前层级节点 添加所有当前层级节点的子节点
    for (let i = 0; i < len; i++) {
      let item = stack.shift()
      if (item.left !== null) stack.push(item.left)
      if (item.right !== null) stack.push(item.right)
    }
    max++
  }
  return max
}
/**
 * 深度优先
 * @param {TreeNode} root
 * @return {number}
 */
// var maxDepth = function (root) {
//     if (root === null) {
//         return 0
//     } else {
//         let left = maxDepth(root.left)
//         let right = maxDepth(root.right)
//         // 最后一层是0 返回一个数字 不断加1
//         return Math.max(left, right) + 1
//     }
// };
