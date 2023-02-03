/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let m = new Map()
  // 设置map
  for (let i = 0; i < arr2.length; i++) {
    m.set(arr2[i], i + 1) // 值为index 升序
  }
  arr1.sort((a, b) => {
    let aM = m.get(a)
    let bM = m.get(b)
    if (aM && bM) {
      // 两个都在arr2 根据index升序
      return aM - bM
    } if (aM) {
      return -1 // a在map中 a排在b前面
    } if (bM) {
      return 1 // b排在a前面
    }
    //  两个都没有的情况 升序
    return a - b
  })
  return arr1
}
