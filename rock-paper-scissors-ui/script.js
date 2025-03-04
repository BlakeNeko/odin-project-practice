const allChoices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let humanScore = 0;

// 获取需要操作的DOM元素
const humanChoiceBox = document.querySelector('.duel .human .choice');
const computerChoiceBox = document.querySelector('.duel .computer .choice');
const humanScoreInfo = document.querySelector('.duel .human .score');
const computerScoreInfo = document.querySelector('.duel .computer .score');
const buttons = document.querySelectorAll('button');
const roundWinnerInfo = document.querySelector('.info h2');

function resetGameData() {
  computerScore = 0;
  humanScore = 0;
}

function resetGameUI() {
  humanChoiceBox.textContent = '';
  computerChoiceBox.textContent = '';
  humanScoreInfo.textContent = humanScore;
  computerScoreInfo.textContent = computerScore;
  roundWinnerInfo.textContent = 'Waiting for human choice...';
}

resetGameData();
resetGameUI();

function getComputerChoice() {
  return allChoices[getRandomInt(0, 2)];
}

function getRandomInt(min, max) {
  // 返回一个随机整数，最小值为min，最大值为max
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
  console.log(`${humanScore} : ${computerScore}`);
}

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    let computerChoice = getComputerChoice();
    let humanChoice = event.target.dataset.choice;

    updateChoiceBoxUI(computerChoice, humanChoice);

    playRound(computerChoice, humanChoice);
    if (humanScore === 5) {
      alert('Human wins the game!');
      resetGameData();
      resetGameUI();
    } else if (computerScore === 5) {
      alert('Computer wins the game!');
      resetGameData();
      resetGameUI();
    }
  });
});

function updateChoiceBoxUI(computerChoice, humanChoice) {
  switch (computerChoice) {
    case 'rock':
      computerChoiceBox.textContent = '✊';
      break;
    case 'paper':
      computerChoiceBox.textContent = '✋';
      break;
    case 'scissors':
      computerChoiceBox.textContent = '✌️';
      break;
  }

  switch (humanChoice) {
    case 'rock':
      humanChoiceBox.textContent = '✊';
      break;
    case 'paper':
      humanChoiceBox.textContent = '✋';
      break;
    case 'scissors':
      humanChoiceBox.textContent = '✌️';
      break;
  }
}
