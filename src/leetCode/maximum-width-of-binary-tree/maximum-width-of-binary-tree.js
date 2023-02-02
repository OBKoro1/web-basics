/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 执行用时：80 ms, 在所有 JavaScript 提交中击败了89.59%的用户
// 内存消耗：42.1 MB, 在所有 JavaScript 提交中击败了90.95%的用户


// 思路： 记录每个节点的position值 同一层深度的宽度就是 right - left + 1
// 更新最大值即可
// 顶节点我们可以从0开始计数，也可以从1开始计数，但如果从0开始计数的话，在相同的高度下，它的计数将会直接少一个数量级。
// 走向左子树：(position-left) * 2 走向右子树： (position -left)  * 2 + 1
// 作用：当前position - left 防止计数值过大 导致溢出
var widthOfBinaryTree = function (root) {
  let stack = [[root, 0]]
  let left = 0 // 左子树的位置
  let right = 0 // 右子树的位置
  let max = 0 // 最大值
  while (stack.length) {
    const len = stack.length
    left = stack[0][1] // 取当前层级第一个元素为左节点
    for (let i = 0; i < len; i++) {
      const [node, position] = stack.shift() // 获取父节点的位置
      right = position
      // 走向左子树：(position-left) * 2 走向右子树： (position -left)  * 2 + 1
      // 作用：当前position - left 防止计数值过大 导致溢出
      if (node.left) stack.push([node.left, 2 * (position - left)])
      if (node.right) stack.push([node.right, 2 * (position - left) + 1])
    }
    max = Math.max(max, right - left + 1) // 当前层级深度 是否更新为最大值
  }
  return max
}


// 满二叉树的解法 记录每个树的位置
// position 数字过大会越界 导致失败
// var widthOfBinaryTree = function (root) {
//     let hash = new Map()
//     let max = 0
//     const help = (node, depth, position) => {
//         if (node !== null) {
//             // 每层级第一个左节点记录位置
//             if (!hash.has(depth)) {
//                 hash.set(depth, position)
//             }
//             max = Math.max(max, position - hash.get(depth) + 1)
//             help(node.left, depth + 1, position * 2)
//             help(node.right, depth + 1, position * 2 + 1)
//         }
//     }
//     help(root, 0, 0)
//     return max
// }

