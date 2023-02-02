/**
 1. 按照身高排序 确定身高维度 前面的节点一定都比本节点高
 2. 重点：下面直接按照k的下标插入 就能找到合适的位置
        后面插入节点也不会影响前面已经插入的节点 因为它是低身高 不进行计算
        比如： [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ] =>  [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // 身高排序辅助函数 k比较小的排前面
  const help = (temp, item) => {
    if (temp[0] === item[0]) {
      // 身高相同 按照k排序 k比较小的 放在前面
      if (temp[1] < item[1]) {
        return true
      }
    } else if (temp[0] > item[0]) {
      // 身高比较高的 排在前面
      return true
    }
    return false // 停止插入
  }
  // 按照身高排序 确定身高维度 前面的节点一定都比本节点高
  // 插入排序
  for (let i = 0; i < people.length; i++) {
    let temp = people[i]
    let j = i
    while (j > 0 && help(temp, people[j - 1])) {
      people[j] = people[j - 1]
      j--
    }
    people[j] = temp
  }
  // 重点贪心： 下面直接按照k的下标插入 就能找到合适的位置
  // 后面插入节点也不会影响前面已经插入的节点 因为它是低身高 不进行计算
  // 局部最优：优先按身高高的people的k来插入。插入操作过后的people满足队列属性
  // 全局最优：最后都做完插入操作，整个队列满足题目队列属性
  // 比如： [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ] =>  [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
  const len = people.length
  for (let i = 0; i < len; i++) {
    const item = people[i]
    // 删除 插入
    people.splice(i, 1)
    people.splice(item[1], 0, item)
  }
  return people
}
