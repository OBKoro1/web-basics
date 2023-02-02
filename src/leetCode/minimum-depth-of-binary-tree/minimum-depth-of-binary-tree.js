/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */



/**
 * 深度优先
 * @param {TreeNode} root
 * @return {number}
 */
// var minDepth = function (root) {
//     let min = 0 // 初始化
//     const countHigh = (node, res) => {
//         if (node === null) return // 递归终止
//         // 叶子节点
//         if (node.left === null && node.right === null) {
//             // 最小高度 比 当前高度高 更新最小高度
//             if (min > res || min === 0) {
//                 min = res
//             }
//             return // 已经有叶子节点退出 第一个
//         }
//         countHigh(node.left, res + 1)
//         countHigh(node.right, res + 1)
//     }
//     countHigh(root, 1)
//     return min
// };


// 广度优先
var minDepth = function (root) {
  if (root === null) return 0
  let stack = [root]
  let count = 0 // 当前节点
  while (stack.length) {
    let len = stack.length
    count++ // 当前层级高度+1
    // 循环清空每个层级
    for (let i = 0; i < len; i++) {
      let node = stack.shift()
      // 广度排序 第一个叶子节点即为最小深度
      if (node.left === null && node.right === null) {
        return count
      }
      // 添加节点
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
  }
  return count
}
