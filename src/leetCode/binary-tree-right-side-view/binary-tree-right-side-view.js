// 广度优先
// 取出每层 最后一个元素
var rightSideView = function (root) {
  if (!root) return []
  let queue = [root] // 队列 把树顶加入队列
  let arr = [] // 用来存储每层最后个元素值
  while (queue.length > 0) {
    let len = queue.length // 当前层的广度
    while (len) {
      let node = queue.shift() // 依次取出当前层队列的元素 从左到右
      if (len === 1) arr.push(node.val) // 当是 当前一层的最后一个元素时，把值加入arr
      if (node.left) queue.push(node.left) // 先添加左侧的
      if (node.right) queue.push(node.right) // 最后添加右侧的 等到最后一个元素时即可添加右侧的值
      len--
    }
  }
  return arr
}

// 深度优先
// 根据deep深度与当前结果的长度 决定是否添加结果
// 先递归右侧节点 保证右侧节点优先
// var rightSideView = function (root) {
//   let res = []
//   function help(node, deep) {
//     if (!node) return
//     // 结果小于等于deep深度 添加进去
//     // res.length在同一层级会变化 它会先添加右侧的节点 因为右侧的先递归
//     if (res.length <= deep) {
//       res.push(node.val)
//     }
//     deep++ // 添加深度
//     // 先深度递归右侧节点 保证同一层级先添加右侧节点
//     help(node.right, deep)
//     help(node.left, deep)
//   }
//   help(root, 0)
//   return res
// }
