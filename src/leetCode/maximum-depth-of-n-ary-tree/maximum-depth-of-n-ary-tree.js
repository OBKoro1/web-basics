/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0
  const helpFn = (node, high) => {
    if (max < high) {
      max = high
    }
    // 没有叶子节点
    if (node.children.length === 0) return
    // 递归子节点 找到最深高度
    for (let i = 0; i < node.children.length; i++) {
      helpFn(node.children[i], high + 1)
    }
  }
  if (root) {
    helpFn(root, 1)
  }
  return max
}
