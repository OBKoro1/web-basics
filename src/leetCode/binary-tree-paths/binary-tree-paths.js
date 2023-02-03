/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度优先递归 只有叶子节点才添加 没值就return
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let resArr = [] // 结果
  const helperFn = (node, res) => {
    if (node === null) return // 循环终止
    // 添加当前节点到路径中
    res += `${node.val}->`
    // 叶子节点添加到最终结果中
    if (node.left === null && node.right === null) {
      res = res.substr(0, res.length - 2) // 去掉最后的->
      resArr.push(res) // 添加该叶子节点
      return
    }
    // 递归左右子节点
    helperFn(node.left, res)
    helperFn(node.right, res)
  }
  helperFn(root, '')
  return resArr
}

// 广度优先
// 两个栈 两个指针 每次推出同一个路径和树
// var binaryTreePaths = function (root) {
//     let res = []
//     let node_stack = [root] // 节点栈
//     let path_stack = [`${root.val}`] // 路径栈
//     while (node_stack.length && path_stack.length) {
//         let node = node_stack.shift()
//         let path = path_stack.shift()
//         // 叶子节点 添加进结果
//         if (node.left === null && node.right === null) {
//             res.push(path)
//         } else {
//             // 有节点才添加
//             if (node.left !== null) {
//                 node_stack.push(node.left)
//                 path_stack.push(`${path}->${node.left.val}`)
//             }
//             if (node.right !== null) {
//                 node_stack.push(node.right)
//                 path_stack.push(`${path}->${node.right.val}`)
//             }
//         }
//     }
//     return res
// }
