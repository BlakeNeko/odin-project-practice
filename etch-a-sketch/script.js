const canvas = document.querySelector('.canvas');
const changeGridSizeButton = document.querySelector('button#change-grid-size');
const clearButton = document.querySelector('button#clear');
const blackButton = document.querySelector('button#black');
const randomRGBButton = document.querySelector('button#random-rgb');

let canvasSize = 16; // 当前画布尺寸
let drawMode = drawBlack; // 当前绘画颜色

function createCanvas(canvasSize) {
  for (let rowCount = 1; rowCount <= canvasSize; rowCount++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let gridCount = 1; gridCount <= canvasSize; gridCount++) {
      let grid = document.createElement('div');
      grid.className = 'grid';
      row.appendChild(grid);

      grid.addEventListener('mouseenter', drawMode);
    }
    canvas.appendChild(row);
  }
}

function clearCanvas() {
  canvas.innerHTML = '';
}

function drawBlack(event) {
  event.target.style.backgroundColor = '#000000';
}

function generateRandomRGB() {
  let red = Math.random() * 256;
  let green = Math.random() * 256;
  let blue = Math.random() * 256;
  return `rgb(${red}, ${green}, ${blue})`;
}

function drawRandomRGB(event) {
  event.target.style.backgroundColor = generateRandomRGB();
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

blackButton.addEventListener('click', function () {
  const allGrids = document.querySelectorAll('div.grid');
  allGrids.forEach((eachGrid) => {
    eachGrid.removeEventListener('mouseenter', drawRandomRGB);
    eachGrid.addEventListener('mouseenter', drawBlack);
    drawMode = drawBlack;
  });
});

randomRGBButton.addEventListener('click', function () {
  const allGrids = document.querySelectorAll('div.grid');
  allGrids.forEach((eachGrid) => {
    eachGrid.removeEventListener('mouseenter', drawBlack);
    eachGrid.addEventListener('mouseenter', drawRandomRGB);
    drawMode = drawRandomRGB;
  });
});

createCanvas(canvasSize);
