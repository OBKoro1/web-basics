/**
 * @param {number[]} bills
 * @return {boolean}
 */

// 官方找零
var lemonadeChange = function (bills) {
  let five = 0; let
    ten = 0 // 五块钱和十块的数量
  for (const bill of bills.values()) {
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      five--
      ten++
    } else if (bill === 20) {
      if (ten) {
        // 有十块 优先用十块
        five--
        ten--
      } else {
        // 都用五块的
        five -= 3
      }
    }
    // 如果数量小于0 则找零失败
    if (five < 0 || ten < 0) return false
  }
  return true
}


// 贪心双循环找零 自己写的
// var lemonadeChange = function (bills) {
//     let moneyArr = [];
//     // 排队
//     for (let i = 0; i < bills.length; i++) {
//         // 找零
//         if (bills[i] !== 5) {
//             const manMoney = bills[i] - 5 // 减去成本
//             if (!getMoney(manMoney)) return false // 找零失败
//         }
//         // 收钱 20块钱不要 因为不能用它来找零
//         if (bills[i] === 10) {
//             moneyArr.unshift(bills[i]) // 十块钱放在前面 优先用它找零
//         } else if (bills[i] === 5) {
//             moneyArr.push(bills[i]) // 五块钱放后面
//         }
//     }

//     // 找零
//     function getMoney(money) {
//         let j = 0 // 找零指针
//         while (moneyArr.length > j) {
//             const nowMoney = moneyArr[j]
//             // 比客户给的少 代表可以找给客户
//             if (nowMoney <= money) {
//                 money = money - nowMoney
//                 moneyArr.splice(j, 1) // 找零后 去掉元素
//             } else {
//                 j++ // 增加指针
//             }
//             // 找零成功 互不拖欠
//             if (money === 0) {
//                 return true
//             }
//         }
//         return false // money不为0 找零失败
//     }
//     return true
// };
