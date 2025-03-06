const lastOperationScreen = document.querySelector('.last-operation');
const currentOperationScreen = document.querySelector('.current-operation');
const clearButton = document.querySelector(`button[data-role='clear']`);
const deleteButton = document.querySelector(`button[data-role='delete']`);
const numberButtons = document.querySelectorAll(`button[data-role='number']`);
const pointButton = document.querySelector(`button[data-role='point']`);
const operatorButtons = document.querySelectorAll(
  `button[data-role='operator']`
);

let firstNumber = '';
let currentOperator = '';
let secondNumber = '';

function clearScreen() {
  currentOperationScreen.textContent = '';
  lastOperationScreen.textContent = '';
}

function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
}

function appendNumber(number) {
  currentOperationScreen.textContent += number.toString();
}

function initCalculator() {
  clearButton.addEventListener('click', function () {
    clearScreen();
  });

  deleteButton.addEventListener('click', function () {
    deleteNumber();
  });

  numberButtons.forEach((eachButton) => {
    eachButton.addEventListener('click', function () {
      appendNumber(this.textContent);
    });
  });

  pointButton.addEventListener('click', function () {
    console.log(this.textContent);
  });

  operatorButtons.forEach((eachButton) => {
    eachButton.addEventListener('click', function () {
      console.log(this.textContent);
    });
  });

  lastOperationScreen.textContent = '21+21=';
  currentOperationScreen.textContent = '42';
}

initCalculator();
