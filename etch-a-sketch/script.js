let canvasSizeElement = document.querySelector('#size');
let canvasSizeValueElement = document.querySelector('#size-value');
let canvasSize = canvasSizeElement.value;

canvasSizeElement.addEventListener('input', () => {
  canvasSize = canvasSizeElement.value;
  canvasSizeValueElement.textContent = `${canvasSize} x ${canvasSize}`;
  createGrid(canvasSize);
});

let blackButton = document.querySelector('#black');
let randomButton = document.querySelector('#random');
let progressiveDarkeningButton = document.querySelector(
  '#progressive-darkening'
);
let clearButton = document.querySelector('#clear');
let colorSelected = 'black';

blackButton.addEventListener('click', () => {
  colorSelected = 'black';
  blackButton.classList.add('active');
  randomButton.classList.remove('active');
  progressiveDarkeningButton.classList.remove('active');
});

randomButton.addEventListener('click', () => {
  colorSelected = 'random';
  blackButton.classList.remove('active');
  randomButton.classList.add('active');
  progressiveDarkeningButton.classList.remove('active');
});

progressiveDarkeningButton.addEventListener('click', () => {
  colorSelected = 'progressive-darkening';
  blackButton.classList.remove('active');
  randomButton.classList.remove('active');
  progressiveDarkeningButton.classList.add('active');
});

clearButton.addEventListener('click', () => {
  clearGrid();
});

function createGrid(size) {
  let canvas = document.querySelector('.canvas');
  let canvasSideLength = canvas.clientWidth;

  canvas.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    let gridElement = document.createElement('div');
    gridElement.classList.add('grid');
    gridElement.style.width = `${canvasSideLength / size}px`;
    gridElement.style.height = `${canvasSideLength / size}px`;

    gridElement.addEventListener('mouseover', (e) => {
      if (colorSelected === 'black') {
        drawOnGrid(e, 'black');
      } else if (colorSelected === 'random') {
        let randomRed = Math.floor(Math.random() * 255);
        let randomGreen = Math.floor(Math.random() * 255);
        let randomBlue = Math.floor(Math.random() * 255);
        let randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
        drawOnGrid(e, `${randomColor}`);
      } else if (colorSelected === 'progressive-darkening') {
        drawOnGrid(e, 'black');
        if (e.target.style.opacity === '') {
          e.target.style.opacity = 0.1;
        } else {
          e.target.style.opacity = Number(e.target.style.opacity) + 0.1;
        }
      }
    });

    canvas.appendChild(gridElement);
  }
}

function clearGrid() {
  let gridElements = document.querySelectorAll('.grid');
  gridElements.forEach((gridElement) => {
    gridElement.style.backgroundColor = '#f3f4f6';
  });
}

function drawOnGrid(e, color) {
  let gridElement = e.target;
  gridElement.style.backgroundColor = color;
}

window.addEventListener('load', () => {
  createGrid(canvasSize);
  blackButton.classList.add('active');
  randomButton.classList.remove('active');
  progressiveDarkeningButton.classList.remove('active');
});
