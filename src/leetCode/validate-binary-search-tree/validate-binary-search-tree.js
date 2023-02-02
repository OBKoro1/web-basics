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
 * @return {boolean}
 */
// var isValidBST = function (root) {

// };

function isValidBST(root) {
  function help(node, min, max) {
    if (node === null) return true
    // 如果有最小值 不小于最小值
    if (node.val <= min) return false
    // 如果有最大值 不超过最大值
    if (node.val >= max) return false
    return help(node.left, min, node.val)
            && help(node.right, node.val, max)
  }
  return help(root, -Infinity, Infinity)
}

// const helper = (root, lower, upper) => {
//     if (root === null) {
//         return true;
//     }
//     if (root.val <= lower || root.val >= upper) {
//         return false;
//     }
//     return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
// }
// var isValidBST = function(root) {
//     return helper(root, -Infinity, Infinity);
// };
