/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// DFS
var levelOrder = function (root) {
  if (!root) return []
  let res = []
  const help = (node, deep) => {
    if (!node) return
    // 初始化层级
    if (!res[deep]) {
      res[deep] = []
    }
    // 从左到右 添加到对应的层级 后面的放在后面
    res[deep].push(node.val)
    // 递归套路
    deep++
    help(node.left, deep)
    help(node.right, deep)
  }
  help(root, 0)
  return res
}
// BFS
// var levelOrder = function (root) {
//     if (!root) return []
//     let res = []
//     let stack = [root]
//     while (stack.length) {
//         let len = stack.length
//         let levelList = [] // 层级套路
//         // 栈循环 套路
//         while (len) {
//             // 取出套路
//             let node = stack.pop()
//             levelList.push(node.val)
//             // 添加套路
//             if (node.left) stack.unshift(node.left)
//             if (node.right) stack.unshift(node.right)
//             len--
//         }
//         res.push(levelList)
//     }
//     return res
// };
