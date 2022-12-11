function createRepeat(callBack, repeat, interval) {

}

const fn = createRepeat(console.log, 3, 4)

fn('helloWorld') // 每4秒输出一次helloWorld, 输出3次







// 答案慎看
// 答案慎看
// 答案慎看
























// function createRepeat(callBack, repeat, interval) {
//     let repeatNum = 0
//     let intervalId = null
//     return (...param) => {
//       intervalId = setInterval(() => {
//         console.log(new Date())
//         callBack(...param)
//         repeatNum += 1
//         if (repeatNum >= repeat) {
//           clearInterval(intervalId)
//           intervalId = null
//         }
//       }, interval * 1000)
//     }
// }
