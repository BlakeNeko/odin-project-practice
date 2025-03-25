function fibs(num) {
  let array = [0, 1];

  for (let i = 1; i <= num - 2; i++) {
    let index = array.length;
    array.push(array[index - 1] + array[index - 2]);
  }

  return array;
}

function fibsRec(n) {
  // 辅助递归函数，用于生成斐波那契数列
  function generateFibonacci(arr, count) {
    // 递归终止条件：当数组的长度达到 n 时停止递归
    if (arr.length === n) {
      return arr;
    }
    // 计算下一个斐波那契数
    const nextNum =
      arr[arr.length - 1] + (arr.length >= 2 ? arr[arr.length - 2] : 0);
    // 将下一个斐波那契数添加到数组中，并递归调用
    return generateFibonacci(arr.concat(nextNum), count);
  }
  // 处理 n 为 0 或 1 的特殊情况
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else {
    // 初始数组包含前两个斐波那契数
    return generateFibonacci([0, 1], n);
  }
}

console.log(fibs(8));
console.log(fibsRec(8));
