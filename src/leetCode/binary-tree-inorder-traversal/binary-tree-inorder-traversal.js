/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let res = []
  dfs(root)
  function dfs(node) {
    if (node) {
      if (node.left) {
        // 左
        dfs(node.left) // 如果遇到左节点 继续递归
      }
      // 中
      res.push(node.val) // 添加当前节点
      if (node.right) {
        // 右
        dfs(node.right)
      }
    }
  }
  return res
}

// var inorderTraversal = function (root) {
//   let res = []
//   if (!root) return []
//   const [white, gray] = ['未访问节点', '已访问节点']
//   const stack = [[root, white]] // stack每个元素都是一个数组 用以记录节点是否访问
//   while (stack.length !== 0) {
//     const [node, color] = stack.pop() // 取出元素
//     if (!node) continue // 添加时没有做空节点判断
//     if (color === white) {
//       // 先添加的节点后取出来 也就是后添加进Res
//       stack.push([node.right, white])
//       stack.push([node, gray]) // 当前节点已访问了 下次遇见直接添加即可
//       stack.push([node.left, white])
//     } else {
//       res.push(node.val) // 遇到灰色的节点直接添加
//     }
//   }
//   return res
// }
