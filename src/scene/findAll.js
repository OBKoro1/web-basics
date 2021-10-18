// 求出一个二维数组[[A, B], [a, b], [1, 2]]所有排列组合

// 输入[[A, B], [a, b], [1, 2]]

// 输出[Aa1, Aa2, Ab1, Ab2, Ba1, Ba2, Bb1, Bb2]

// 循环老数组拼接新数组元素
const getResult = (arrA, arrB) => {
    if (!Array.isArray(arrA) || !Array.isArray(arrB)) {
        return
    }
    if (arrA.length === 0) {
        return arrB
    }
    if (arrA.length === 0) {
        return arrA
    }
    let result = [];
    for (let i = 0; i < arrA.length; i++) {
        for (let j = 0; j < arrB.length; j++) {
            // 双重遍历拼接老数组成员与新数组成员
            result.push(String(arrA[i]) + String(arrB[j]))
        }
    }
    return result
};

// 递归 数组出栈 每个都与其他元素拼接
const findAll = arr => {
    if (arr.length === 1) {
        return arr[0]
    }
    const temp = arr.shift();
    return getResult(temp, findAll(arr))
};

// 测试
let oldArr = [['A', 'B'], ['a', 'b'], ['1', '2']]

console.log('findAll', findAll(oldArr))