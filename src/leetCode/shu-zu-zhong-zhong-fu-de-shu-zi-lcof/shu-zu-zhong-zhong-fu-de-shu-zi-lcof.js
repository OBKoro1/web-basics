/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  // nums
  let map = {}
  for (let item of nums.values()) {
    if (map[item]) return item
    map[item] = '占位'
  }
}
