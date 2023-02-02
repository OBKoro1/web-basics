// 栈
function asteroidCollision(ats) {
  const stk = []
  for (const t of ats) {
    let ok = true // 默认行星 正值添加，负值添加
    // 观察示例规律，隐含条件：正值都在左边，负值都在右边
    // 相反方向 栈中为正，新添加为负值
    while (ok && stk.length > 0 && stk[stk.length - 1] > 0 && t < 0) {
      const a = stk[stk.length - 1] // 栈中行星
      const b = Math.abs(t) // 负值转换为正值 用于对比
      if (a === b) {
        // 销毁并且不添加
        stk.pop()
        ok = false
      }
      if (a < b) {
        // 小于 栈中行星被销毁
        stk.pop()
      }
      if (a > b) {
        // 大于 销毁 不添加行星
        ok = false
      }
    }
    // 添加新的行星
    if (ok) stk.push(t)
  }
  return stk
}


// /**
//  * 栈
//  * @param {number[]} asteroids
//  * @return {number[]}
//  */
// var asteroidCollision = function (asteroids) {
//   let len = asteroids.length
//   let stack = []
//   for (let i = 0; i < len; i++) {
//     stack.push(asteroids[i]) // 一个一个值添加到栈里面 然后控制栈里面的元素
//     // 观察示例规律，隐含条件：正值都在左边，负值都在右边
//     // 栈中有两个值才比较
//     // 验证最后一个值是负数最后第二个值是正数 它们才会碰撞
//     // 如果最后一个值是正数 最后第二个值是负数 它们不会碰撞
//     while (
//       stack.length >= 2
//             && stack[stack.length - 1] < 0
//             && stack[stack.length - 2] > 0
//     ) {
//       // 获取绝对值
//       let last = Math.abs(stack[stack.length - 1])
//       let last2 = Math.abs(stack[stack.length - 2])
//       if (last === last2) {
//         stack.splice(stack.length - 2, 2) // 相同 一起销毁
//       } else if (last > last2) {
//         stack.splice(stack.length - 2, 1) // 最后一个值比较大 删除最后第二个
//       } else {
//         stack.splice(stack.length - 1, 1) // 最后一个值比较小 删除最后第二个
//       }
//     }
//   }
//   return stack
// }


