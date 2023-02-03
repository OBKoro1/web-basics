/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * fn = fn-1 !== 1 && fn+1 !== 1
 */
var canPlaceFlowers = function (flowerbed, n) {
  let total = flowerbed.length
  for (let i = 0; i < total; i += 2) {
    // 0才考虑种花
    if (flowerbed[i] === 0) {
      // 下格为空 说明可种 末尾也说明可种  因为一下子跳两格 已经消除影响了
      if (flowerbed[i + 1] === 0 || i === total - 1) {
        n-- //
      } else {
        i++ // 下格为1 跳过本格 变成1那格 以及下次循环连跳两格 消除1的影响
      }
    }
  }
  return n <= 0
}
