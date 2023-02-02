/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 取出字符 判断回文
var isPalindrome = function (head) {
  let arr = []
  // 取出字符
  let curr = head
  while (curr) {
    arr.push(curr.val)
    curr = curr.next
  }
  // 双指针判断回文
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) {
      return false
    }
  }
  return true
}
