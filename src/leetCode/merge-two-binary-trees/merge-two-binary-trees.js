/* eslint-disable no-undef */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 递归
// var mergeTrees = function (root1, root2) {
//     // 两边都有节点 合成
//     if (root1 && root2) {
//         let node = new TreeNode()
//         // 递归
//         node.left = mergeTrees(root1.left, root2.left)
//         node.right = mergeTrees(root1.right, root2.right)
//         node.val = root1.val + root2.val
//         return node
//     } else {
//         // 只有一个节点 直接返回
//         return root1 || root2
//     }
// };

// 广度优先
var mergeTrees = function (root1, root2) {
  if (root2 === null) return root1
  if (root1 === null) return root2
  let tree = new TreeNode(root1.val + root2.val)
  // 三个栈 同进同出
  let queen = [tree]
  let queen1 = [root1]
  let queen2 = [root2]
  while (queen1.length && queen2.length) {
    let node = queen.shift()
    let t1 = queen1.shift()
    let t2 = queen2.shift()
    if (t1.left !== null && t2.left !== null) {
      node.left = new TreeNode(t1.left.val + t2.left.val)
      // 添加左子树
      queen1.push(t1.left)
      queen2.push(t2.left)
      queen.push(node.left)
    } else if (t1.left !== null) {
      node.left = t1.left
    } else if (t2.left !== null) {
      node.left = t2.left
    }
    if (t1.right !== null && t2.right !== null) {
      node.right = new TreeNode(t1.right.val + t2.right.val)
      // 添加右子树
      queen1.push(t1.right)
      queen2.push(t2.right)
      queen.push(node.right)
    } else if (t1.right !== null) {
      node.right = t1.right
    } else if (t2.right !== null) {
      node.right = t2.right
    }
  }
  return tree
}


