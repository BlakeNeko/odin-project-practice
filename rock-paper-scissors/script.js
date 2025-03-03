const allChoices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  return allChoices[getRandomInt(0, 2)];
}

function getHumanChoice() {
  let humanInput = prompt('Please input your choice:');
  humanInput = humanInput.trim().toLowerCase();
  if (allChoices.includes(humanInput)) {
    return humanInput;
  } else {
    return null;
  }
}

function getRandomInt(min, max) {
  // 返回一个随机整数，最小值为min，最大值为max。
  return Math.floor(Math.random() * (max - min + 1) + min);
}
