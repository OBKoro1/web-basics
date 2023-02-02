/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return []
  let res = []
  const help = (node, count, listStr) => {
    if (!node) return
    count -= node.val
    if (!listStr) {
      // 初始化
      listStr = `${node.val}`
    } else {
      // 使用字符串保存走过的节点 这样在递归的时候 左子树和右子树不会互相影响
      listStr = `${listStr}+${node.val}`
    }
    // 直到遇到叶子节点 并且count为0
    if (count === 0 && !node.left && !node.right) {
      let list = listStr.split('+') // 字符串转数组
      res.push(list)
      return
    }
    help(node.left, count, listStr)
    help(node.right, count, listStr)
  }
  help(root, targetSum)
  return res
}
