function mergeSort(arr) {
  // 如果数组长度小于等于1，直接返回
  if (arr.length <= 1) {
    return arr;
  }

  // 找到数组的中间位置
  const mid = Math.floor(arr.length / 2);

  // 将数组分为左右两部分，并递归排序
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  // 合并排序后的左右两部分
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0; // left数组的指针
  let j = 0; // right数组的指针

  // 比较left和right的元素，按顺序添加到result数组中
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // 将剩余的元素添加到result数组中
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log('原始数组:', arr);
const sortedArr = mergeSort(arr);
console.log('排序后数组:', sortedArr);
