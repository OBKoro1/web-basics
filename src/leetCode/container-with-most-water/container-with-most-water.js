// 双指针 O(n)
function maxArea(height) {
  // 初始化双指针
  let r = height.length - 1
  let l = 0
  let max = 0
  while (l < r) {
    // 计算当前值
    const heightNum = height[l] > height[r] ? height[r] : height[l]
    const lengthNum = r - l
    // 最大值
    max = Math.max(max, heightNum * lengthNum)
    // 移动最小短板指针
    if (height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }
  return max
}


// 双循环 O(2n)
// function maxArea(height) {
//     let total = height.length
//     let max = 0
//     // 双循环 每个木板都跟其他木板匹配一次
//     for (let i = 0; i < total; i++) {
//         for (let j = 1; j < total; j++) {
//             // 两个木板的高度
//             let num1 = height[i]
//             let num2 = height[j]
//             // 获取最小高度
//             let heightNum = num1 > num2 ? num2 : num1 // 取木板最小的那个值
//             let lengthNum = j - i // 底部的长度
//             let size = heightNum * lengthNum
//             if (size > max) {
//                 max = size // 最大面积
//             }
//         }
//     }
//     return max
// }
