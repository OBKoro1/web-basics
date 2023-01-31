// 递归解法：
const fibonacci = (n) => {
  if (!(typeof n === 'number' && n % 1 === 0 && n > 1)) {
    throw '请输入大于0的整数数字'
  }
  let array = [0, 0, 1]
  let temp = (n) => {
    if (n === 1 || n === 2) return array[n]
    array[n] = temp(n - 1) + temp(n - 2) // 递归获取推算数组每一个元素的值
    return array[n]
  }
  let num = temp(n)
  array.splice(2, 1) // 将数组恢复成 斐波纳契数列
  return num
}

// // 遍历保存结果
// const fibonacci = n => {
//     let a = 0,
//       b = 1,
//       c,
//       d = [0];
//     for (let i = 1; i < n; i++) {
//       c = a + b;
//       a = b;
//       b = c;
//       d.push(a); // 加戏 恢复数列
//     }
//     console.log(d, '斐波纳契数列');
//     return a;
//   };



// // 一次遍历 逐步推导所有元素
//   const fibonacci = n => {
//     let num = new Array(n).fill(0); // 初始化数组，并设置初始值
//     num[1] = 1; // 设置第二个元素的值 推导第3个元素
//     for (let i = 2; i <= n - 1; i++) {
//       num[i] = num[i - 2] + num[i - 1]; // 遍历逐步推导元素值 数组完全符合数列不用进行判断等 运行效率最高。
//     }
//     return num[n - 1]; // 数组是从0开始计算 所以要减1
//   };
