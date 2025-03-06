const lastOperationScreen = document.querySelector('.last-operation');
const currentOperationScreen = document.querySelector('.current-operation');
const clearButton = document.querySelector(`button[data-role='clear']`);
const deleteButton = document.querySelector(`button[data-role='delete']`);
const numberButtons = document.querySelectorAll(`button[data-role='number']`);
const pointButton = document.querySelector(`button[data-role='point']`);
const operatorButtons = document.querySelectorAll(
  `button[data-role='operator']`
);
const equalsButton = document.querySelector(`button[data-role='equals']`);

let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let shouldResetScreen = false;

function clearScreen() {
  currentOperationScreen.textContent = '';
  lastOperationScreen.textContent = '';
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
}

function deleteNumber() {
  currentOperationScreen.textContent = currentOperationScreen.textContent.slice(
    0,
    -1
  );
}

function appendNumber(number) {
  // 需要重置屏幕时清空当前内容
  if (shouldResetScreen) {
    currentOperationScreen.textContent = '';
    shouldResetScreen = false;
  }

  // 处理前导零和小数点逻辑
  if (currentOperationScreen.textContent === '0' && number !== '.') {
    currentOperationScreen.textContent = number;
  } else {
    currentOperationScreen.textContent += number;
  }
}

function appendPoint() {
  if (shouldResetScreen) {
    currentOperationScreen.textContent = '0';
    shouldResetScreen = false;
  }

  // 空屏幕时自动补零
  if (currentOperationScreen.textContent === '') {
    currentOperationScreen.textContent = '0';
  }

  if (!currentOperationScreen.textContent.includes('.')) {
    currentOperationScreen.textContent += '.';
  }
}

function handleOperator(operator) {
  // 1. 如果尚未输入操作数，尝试获取当前屏幕内容作为第一个操作数
  if (currentOperator === null) {
    firstNumber = currentOperationScreen.textContent;
    currentOperator = operator;
    lastOperationScreen.textContent = `${firstNumber} ${currentOperator}`;
    shouldResetScreen = true; // 输入下一个数字前清空屏幕
  }
  // 2. 已有操作数但未按等号，允许替换运算符（例如用户输入 3 + 但想改为 3 -）
  else {
    // 只有当前屏幕有修改时才需要计算（避免重复按操作符后误计算）
    if (!shouldResetScreen) {
      computeResult();
    }
    currentOperator = operator; // 更新为新的运算符
    lastOperationScreen.textContent = `${firstNumber} ${currentOperator}`;
    shouldResetScreen = true;
  }
}

function computeResult() {
  // 安全性检查：必须存在操作符和有效的第二个操作数
  if (currentOperator === null || shouldResetScreen) return;

  // 获取第二个操作数
  const secondNumber = currentOperationScreen.textContent;

  // 处理除以零
  if (currentOperator === '÷' && secondNumber === '0') {
    alert('Cannot divide by zero!');
    clearScreen();
    return;
  }

  // 执行计算
  const result = calculate(
    currentOperator,
    Number(firstNumber),
    Number(secondNumber)
  );

  // 更新屏幕和状态
  currentOperationScreen.textContent = result;
  lastOperationScreen.textContent = `${firstNumber} ${currentOperator} ${secondNumber} =`;
  firstNumber = result; // 保留结果作为下一步的第一个操作数
  shouldResetScreen = true;
  currentOperator = null; // 需要用户明确按新运算符才能继续操作
}

// 浮点数计算函数（注意精度问题）
function calculate(operator, a, b) {
  switch (operator) {
    case '+':
      return a + b;
    case '−':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      return a / b;
  }
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
    eachButton.addEventListener('click', () => {
      handleOperator(eachButton.textContent);
    });
  });

  equalsButton.addEventListener('click', computeResult);
}

initCalculator();
