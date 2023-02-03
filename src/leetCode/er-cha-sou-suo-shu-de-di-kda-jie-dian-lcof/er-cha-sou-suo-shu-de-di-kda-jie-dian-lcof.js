/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let res
  const getVal = (root) => {
    if (!root) return
    if (res) return
    // 从大到小 先搜索大的树 搜索到尽头就是最大的
    getVal(root.right)
    // 添加
    k-- // 每拿到一个最大值 就减一
    // 直到拿到第K大的值 即找到
    if (k === 0) {
      res = root.val
    }
    // 搜索小的树
    getVal(root.left)
  }
  getVal(root)
  return res
}
