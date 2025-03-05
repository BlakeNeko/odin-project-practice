const canvas = document.querySelector('.canvas');

let canvasSize = 16;
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
