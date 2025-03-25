function fibs(num) {
  let array = [0, 1];

  for (let i = 1; i <= num - 2; i++) {
    let index = array.length;
    array.push(array[index - 1] + array[index - 2]);
  }

  return array;
}

console.log(fibs(8));
