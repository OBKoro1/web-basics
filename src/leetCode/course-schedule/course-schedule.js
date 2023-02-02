/* eslint-disable operator-assignment */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

// 参考：https://leetcode-cn.com/problems/course-schedule/solution/bao-mu-shi-ti-jie-shou-ba-shou-da-tong-tuo-bu-pai-/
// 理解后自己加了更符合题意的注释 盲写出来。
// 1. 根据依赖关系，构建邻接表(本选修课 被哪些课所依赖)、入度数组（要选修的课依赖哪些课 如果依赖结束之后 则可以学习这门课）。
// 2. 选取入度为 0 的数据，根据邻接表，减小依赖它的数据的入度。
// 3. 找出入度变为 0 的数据，重复第 2 步。
// 4. 直至所有数据的入度为 0，得到排序，如果还有数据的入度不为 0，说明图中存在环。

// BFS 广度优先
var canFinish = function (numCourses, prerequisites) {
  let watcherClass = new Array(numCourses).fill(0) // 入度 要选修的课依赖哪些课 如果依赖结束之后 则可以学习这门课
  let hash = {} // 邻接表：本选修课 被哪些课所依赖
  // 构建入度 和 选修依赖
  for (let i = 0; i < prerequisites.length; i++) {
    let [studyClass, needStudyClass] = prerequisites[i]
    watcherClass[studyClass] = watcherClass[studyClass] + 1 // 为该序号的课程 增加依赖
    // 本课程被谁依赖
    if (hash[needStudyClass]) {
      hash[needStudyClass].push(studyClass)
    } else {
      hash[needStudyClass] = [studyClass]
    }
  }
  let stack = []
  // 入列-出度：拿出所有不依赖其他课程的 选修课 先学习这些课程
  for (let i = 0; i < watcherClass.length; i++) {
    let nowStudy = watcherClass[i]
    if (nowStudy === 0) {
      stack.push(i) // 获取课程下标
    }
  }
  let canStudyNum = 0 // 可以学习课程的数量
  // 学习可以学习的课程
  while (stack.length) {
    let canStudy = stack.pop() // 可以学习的课程下标
    canStudyNum++ // 增加可以学习课程的数量
    // 通过学习课程找出其他学习的课程
    let canStudyArr = hash[canStudy]
    if (canStudyArr && canStudyArr.length) {
      for (let j = 0; j < canStudyArr.length; j++) {
        let canStudyClass = canStudyArr[j] // 可以学习的课程
        // 根据可学课程 减少依赖课程
        watcherClass[canStudyClass] = watcherClass[canStudyClass] - 1
        // 入列-出度： 依赖课程为0 代表可以学习
        if (watcherClass[canStudyClass] === 0) {
          stack.push(canStudyClass)
        }
      }
    }
  }
  // 可以学习课程 与 所需课程 是否相等，不相等即为即有环 导致不能学习所有课程
  return canStudyNum === numCourses
}

// BFS 深度优先
// 通过标志位，学习依赖本次的课程 看依赖本次的课程是否会再次依赖本次课程 那就代表有环
// var canFinish = function (numCourses, prerequisites) {
//     // 构建课程邻接表
//     let hash = {}
//     for (let i = 0; i < prerequisites.length; i++) {
//         let [studyClass, needStudyClass] = prerequisites[i]
//         if (hash[needStudyClass]) {
//             hash[needStudyClass].push(studyClass)
//         } else {
//             hash[needStudyClass] = [studyClass]
//         }
//     }
//     let flagArr = new Array(numCourses).fill('init') // 初始化标志位
//     // 学习hash邻接表的所有课程
//     for (let i = 0; i < numCourses; i++) {
//         let isNoRing = bfs(i)
//         if (!isNoRing) return false // 有环
//     }
//     // 通过标志位，学习依赖本次的课程 看依赖本次的课程是否会再次依赖本次课程 那就代表有环
//     function bfs(index) {
//         if (flagArr[index] === 1) return false // 本次已经被依赖了 不能重复依赖
//         if (flagArr[index] === -1) return true // 其他路径 已经bfs过 该路径的依赖没问题
//         flagArr[index] = 1 // 标志：学习本课程 清空需要依赖的
//         let needStudyClassArr = hash[index] // 获取邻接表中 依赖它 需要学习的课程数组
//         if (needStudyClassArr) {
//              // 学习依赖本次的课程 看依赖本次的课程是否会再次依赖本次课程 那就代表有环
//             for (let j = 0; j < needStudyClassArr.length; j++) {
//                 let canStudyClass = needStudyClassArr[j]
//                 let isNoRing = bfs(canStudyClass) // 深度递归
//                 if (!isNoRing) return false // 有环
//             }
//         }
//         flagArr[index] = -1 // 标志：本次bfs没环 不会重复依赖 路径干净
//         return true
//     }
//     return true // 无环则默认数量相等
// }
