/* eslint-disable camelcase */
/* eslint-disable no-undef */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return dfs(0, preorder.length - 1, 0, inorder.length - 1)
  function dfs(start, end, start_num, end_num) {
    if (start > end) return null
    let rootVal = preorder[start] // 根节点的值
    let root = new TreeNode(rootVal) // 根节点
    let mid = inorder.indexOf(rootVal) // 根节点在inorder的位置
    let leftNum = mid - start_num // 左子树的节点数
    root.left = dfs(start + 1, start + leftNum, start_num, mid - 1)
    root.right = dfs(start + leftNum + 1, end, mid + 1, end_num)
    return root
  }
}


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// // 思路： 根据前序遍历和中序遍历的特性 递归构建二叉树
// //  前序 = [[根节点], [左子树], [右子树]]
// //  中序 = [[左子树], [根节点], [右子树]]
// var buildTree = function (preorder, inorder) {
//   // 映射表 key：中序元素 值: 元素index
//   // 方便查找 中序遍历的根节点
//   let hash = new Map()
//   let len = inorder.length
//   for (let i = 0; i < len; i++) {
//     hash.set(inorder[i], i)
//   }
//   const help = (preorderLeft, preorderRight, inorderLeft, inorderRight) => {
//     if (preorderLeft > preorderRight) return null
//     let root = preorder[preorderLeft] // 获取根节点
//     let node = new TreeNode(root) // 构建根节点
//     let inorderRootIndex = hash.get(root) // 获取中序遍历的根节点
//     let size = inorderRootIndex - inorderLeft // 获取左子树的长度
//     let start1 = preorderLeft + 1 // 前序遍历的左子树start = start
//     let end1 = preorderLeft + size // 前序遍历左子树end = start + 节点数量
//     let start2 = inorderLeft // 中序左子树start = start
//     let end2 = inorderRootIndex - 1 // 中序左子树end = 根节点 -1
//     node.left = help(start1, end1, start2, end2)
//     start1 = preorderLeft + size + 1 // 前序遍历的右子树start =  start + 节点数量 + 1
//     end1 = preorderRight // 前序遍历右子树end = 右子树的结束位置
//     start2 = inorderRootIndex + 1 // 中序右子树start = 中序根节点 + 1
//     end2 = inorderRight // 中序右子树end = 右节点的叔叔位置
//     node.right = help(start1, end1, start2, end2)
//     return node
//   }
//   return help(0, len - 1, 0, len - 1)
// }

