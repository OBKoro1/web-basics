var permute = function (nums) {
  let res = []
  dfs([])
  function dfs(path) {
    if (path.length === nums.length) {
      const item = [...path] // 复制path 引用类型 指针相同
      res.push(item) // 一条路径完成
      return
    }
    // 遍历决策树
    for (let num of nums.values()) {
      if (path.includes(num)) continue // 已存在的元素不再添加 防止重复
      path.push(num) // 每个节点 都选择一遍它的路径
      dfs(path) // 穷尽它的路径 回溯
      path.pop() // 撤销选择的节点 回归原先的状态 回溯
    }
  }
  return res
}
