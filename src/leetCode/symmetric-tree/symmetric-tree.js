/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// /**
//  * 递归 同时移动指针 任何一棵树的左节点 等于另一颗的右节点
//  * @param {TreeNode} root
//  * @return {boolean}
//  */
// var isSymmetric = function (root) {
//   const checkNode = (leftRoot, rightRoot) => {
//     if (leftRoot === null && rightRoot === null) return true // 没有节点为true
//     if (leftRoot === null || rightRoot === null) return false // 其中一个为空
//     if (leftRoot.val !== rightRoot.val) return false // 值不等
//     // 左节点的左树和右节点的右树 右节点的的左树和左节点的右树
//     return checkNode(leftRoot.left, rightRoot.right) && checkNode(rightRoot.left, leftRoot.right)
//   }
//   return checkNode(root, root)
// }

// 栈实现
var isSymmetric = function (root) {
  if (root == null || (root.left == null && root.right == null)) {
    return true
  }
  const stack = [root.left, root.right]
  while (stack.length) {
    const left = stack.pop()
    const right = stack.pop()
    if (left == null && right == null) {
      continue
    }
    if (left == null || right == null) {
      return false
    }
    if (left.val !== right.val) {
      return false
    }
    // 将左节点的左孩子， 右节点的右孩子放入队列
    stack.push(left.left)
    stack.push(right.right)
    // 将左节点的右孩子，右节点的左孩子放入队列
    stack.push(left.right)
    stack.push(right.left)
  }
  return true
}
