/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归 从上到下翻转
var invertTree = function (root) {
  // 递归终止
  if (!root) return root
  // 交换上级的左右节点
  let temp = root.left
  root.left = root.right
  root.right = temp
  // 递归交换子节点的左右节点
  invertTree(root.left)
  invertTree(root.right)
  return root // 返回交换过的左右节点 用于组装
}

// 广度优先 从上到下
// var invertTree = function (root) {
//   if (!root) return root
//   let stack = [root] // 栈
//   while (stack.length) {
//     let len = stack.length
//     // 遍历同一层级的所有节点
//     for (let i = 0; i < len; i++) {
//       let node = stack.shift() // 从开头取元素 先进先出
//       if (!node) continue // 如果节点为空 则不操作
//       // 交换节点
//       let temp = node.left
//       node.left = node.right
//       node.right = temp
//       // 在栈后面添加左右节点
//       stack.push(node.left, node.right)
//     }
//   }
//   return root
// }

// 递归 从下到上翻转
// var invertTree = function (root) {
//     // 递归终止
//     if (!root) return root
//     // 递归 获取子级已经交换左右节点的root 左右组装root
//     let left = invertTree(root.left)
//     let right = invertTree(root.right)
//     // 本节点下面的子节点都已经翻转 实现本节点下面的翻转
//     root.left = right
//     root.right = left
//     return root // 返回已经交换左右节点的root
// };


