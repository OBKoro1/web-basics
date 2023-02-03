/* eslint-disable no-undef */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 深度遍历
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null // 元素不存在
  let mid = Math.floor(nums.length / 2)
  let root = new TreeNode(nums[mid], null, null) // 取中间元素为根节点
  // 将数组分为两边 放入左右节点 会一直递归直到剩一个元素 或者不存在 放入孙子节点
  root.left = sortedArrayToBST(nums.slice(0, mid))
  root.right = sortedArrayToBST(nums.slice(mid + 1))
  return root
}
