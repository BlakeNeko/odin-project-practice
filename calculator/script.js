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
  firstNumber = '';
  currentOperator = '';
  secondNumber = '';
}

function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
}

function appendNumber(number) {
  // 避免出现多个0，如果当前屏幕已经是0了，就替换为新输入的数字
  if (currentOperationScreen.textContent === '0') {
    if (number === '0') {
      return;
    } else {
      currentOperationScreen.textContent = number;
      return;
    }
  }

  currentOperationScreen.textContent += number.toString();
}

function appendPoint() {
  // 避免出现多个小数点，如果当前屏幕已经有小数点或者为空，就不允许输入小数点
  if (
    currentOperationScreen.textContent.includes('.') ||
    currentOperationScreen.textContent === ''
  ) {
    return;
  }

  currentOperationScreen.textContent += '.';
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
    appendPoint();
  });

  operatorButtons.forEach((eachButton) => {
    eachButton.addEventListener('click', function () {});
  });
}

initCalculator();
