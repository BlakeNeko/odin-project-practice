const allChoices = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let humanScore = 0;
let roundCount = 1;
let humanChoice = undefined;
let computerChoice = undefined;

// 获取需要操作的DOM元素
const humanChoiceBox = document.querySelector('.duel .human .choice');
const computerChoiceBox = document.querySelector('.duel .computer .choice');
const humanScoreInfo = document.querySelector('.duel .human .score');
const computerScoreInfo = document.querySelector('.duel .computer .score');
const buttons = document.querySelectorAll('button');
const roundWinnerInfo = document.querySelector('.info h2');

function resetGameData() {
  humanChoice = undefined;
  computerChoice = undefined;
  computerScore = 0;
  humanScore = 0;
  roundCount = 1;
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

buttons.forEach((button) => {
  button.addEventListener('click', function (event) {
    console.log(event.target.dataset.choice);
  });
});
