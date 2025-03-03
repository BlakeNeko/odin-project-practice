const allChoices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let humanScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

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

function playRound(computerChoice, humanChoice) {
  if (computerChoice === 'rock') {
    if (humanChoice === 'rock') {
      console.log(`It's a draw! ${computerChoice} and ${humanChoice}.`);
    } else if (humanChoice === 'paper') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    }
  } else if (computerChoice === 'paper') {
    if (humanChoice === 'rock') {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else if (humanChoice === 'paper') {
      console.log(`It's a draw! ${computerChoice} and ${humanChoice}.`);
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    }
  } else {
    if (humanChoice === 'rock') {
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
      humanScore++;
    } else if (humanChoice === 'paper') {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
      computerScore++;
    } else {
      console.log(`It's a draw! ${computerChoice} and ${humanChoice}.`);
    }
  }
}

playRound(computerChoice, humanChoice);
