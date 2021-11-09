/*
 * Author       : OBKoro1
 * Date         : 2021-11-09 17:56:27
 * LastEditors  : OBKoro1
 * LastEditTime : 2021-11-09 18:02:54
 * description  : 拼多多 找到数组中相加为target的两个值
 */
// 拼多多 pdd-20211109 第四题
// 找到数组中相加为target的两个值
// arr = [ 2, 14, -2 ,9,10,-5,7] target = 9
// 输出对应值的下标: [0,6]

// 先说一下思路 然后实现代码

function findTarget(arr, target) {

}













// 找到数组中相加为target的两个值
// arr = [ 2, 14, -2 ,9,10,-5,7] target = 9
// 输出对应值的下标: [0,6]

// function findTarget(arr, target) {
//     let hash = {}
//     for (let i = 0; i < arr.length; i++) {
//         let item = arr[i]
//         // 找到目标值
//         if (hash[item]) {
//             return [hash[item], i]
//         }
//         // 没找到
//         let num = target - item
//         hash[num] = i
//     }
//     return false
// }
