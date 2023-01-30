/**
 * 贪心算法
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function (prices) {
  let max = 0 // 利润
  for (let i = 1; i < prices.length; i++) {
    let money = prices[i] - prices[i - 1] // 后一天减去前一天
    if (money > 0) max += money
  }
  return max
}

// /**
//  * 设置一个最大值
//  * 当估值一直上升时 不卖
//  *
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//     let max = 0; // 利润
//     let by = -1; // 当前持有
//     let before = -1; //
//     for (let i = 0; i < prices.length; i++) {
//         // 买入股票
//         if (by === -1) {
//             by = prices[i]
//             continue
//         }
//         const getMoney = prices[i] - by // 本次交易的利润
//         const beforeMoney = before - by // 之前交易的利润
//         if (getMoney < beforeMoney) {
//             // 之前卖出利润更大
//             if (before !== -1 && beforeMoney) {
//                 // 之前有买卖操作 将其卖了 更新利润
//                 max = beforeMoney + max
//                 before = -1 // 更新之前为0
//                 by = prices[i] // 买入当前股票
//             } else {
//                 // 之前没有买卖操作 第一次操作 更新买入时间
//                 before = prices[i]
//             }
//         } else if (getMoney >= beforeMoney && i === prices.length - 1 && getMoney >= 0) {
//             // 本次利润最大 并且是最后一位
//             max = getMoney + max
//         } else if (before === -1 && getMoney <= 0) {
//             // 卖股票不挣钱
//             // 新价格更低 更新买入时间 第二天买入
//             by = prices[i]
//         } else {
//             // 之前卖出利润小 更新before
//             before = prices[i]
//         }
//     }
//     return max
// };
