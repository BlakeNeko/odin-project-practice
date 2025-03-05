const canvas = document.querySelector('.canvas');
const changeGridSizeButton = document.querySelector('button#change-grid-size');
const clearButton = document.querySelector('button#clear');

let canvasSize = 16; // 当前画布尺寸

function createCanvas(canvasSize) {
  for (let rowCount = 1; rowCount <= canvasSize; rowCount++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let gridCount = 1; gridCount <= canvasSize; gridCount++) {
      let grid = document.createElement('div');
      grid.className = 'grid';
      row.appendChild(grid);

      grid.addEventListener('mouseenter', function () {
        this.style.backgroundColor = '#000000';
      });
    }
    canvas.appendChild(row);
  }
}

function clearCanvas() {
  canvas.innerHTML = '';
}

changeGridSizeButton.addEventListener('click', function () {
  let userInput = prompt('Size of the new canvas(less than or equal to 100):');
  // 用户单击取消
  if (userInput === null) {
    alert('You have cancelled your input.');
    return;
  }
  // 用户输入的不能转换为数字
  userInput = parseInt(userInput.trim());
  if (isNaN(userInput)) {
    alert('Please input a vaild number.');
    return;
  } else if (userInput > 100) {
    alert('Please input less than 100.');
    return;
  } else {
    canvasSize = userInput;
    clearCanvas();
    createCanvas(canvasSize);
  }
});

clearButton.addEventListener('click', function () {
  clearCanvas();
  createCanvas(canvasSize);
});

createCanvas(canvasSize);
