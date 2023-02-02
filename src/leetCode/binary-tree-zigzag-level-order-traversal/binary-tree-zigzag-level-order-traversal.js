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
//  BFS广度思路：
//  x  y 左右节点push到stack中
// 1 2 3 4
// 从头拿出来 左边就push 把后面的放到后面, 右边是unshift把后面的插入到前面
// var zigzagLevelOrder = function (root) {
//     if (!root) return []
//     let type = 'left'
//     let stack = [root]
//     let res = []
//     while (stack.length) {
//         let len = stack.length
//         let levelList = []; // 层级
//         while (len) {
//             let node = stack.shift() // 从头取出来
//             // 左边就push 把后面的放到后面, 右边是unshift把后面的插入到前面
//             if (type === 'left') {
//                 levelList.push(node.val)
//             } else {
//                 levelList.unshift(node.val)
//             }
//             // 左右节点直接添加即可
//             if (node.left) stack.push(node.left)
//             if (node.right) stack.push(node.right)
//             len--
//         }
//         type = type === 'left' ? 'right' : 'left' // 更改方向
//         res.push(levelList) // 添加层级
//     }
//     return res
// };

// BFS 深度思路:
// deep深度来判断层级 来判断往前还是往后添加
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let res = []
  const BFSHelp = (node, deep) => {
    if (!node) return
    // 初始化层级
    if (!res[deep]) {
      res[deep] = []
    }
    if (deep % 2 === 0) {
      // 双数 往左 从左开始 把后面的放在后面
      res[deep].push(node.val)
    } else {
      // 单数 往右 从左开始 把后面的放在前面
      res[deep].unshift(node.val)
    }
    BFSHelp(node.left, deep + 1)
    BFSHelp(node.right, deep + 1)
  }
  BFSHelp(root, 0)
  return res
}
