function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]]
    }
  }
  return arr
}

// 使用
const oldArr = [3, 4, 5, 1, 2, 7, 8]

selectionSort(oldArr)
console.log('排序结果', oldArr)
