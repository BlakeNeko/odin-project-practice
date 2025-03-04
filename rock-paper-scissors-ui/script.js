const allChoices = ['rock', 'paper', 'scissors'];
const allChoicesEmoji = ['✊', '✋', '✌️'];
let computerScore = 0;
let humanScore = 0;
let roundCount = 1;

// 获取需要操作的DOM元素
const humanChoiceBox = document.querySelector('.duel .human .choice');
const computerChoiceBox = document.querySelector('.duel .computer .choice');
const humanScoreInfo = document.querySelector('.duel .human .score');
const computerScoreInfo = document.querySelector('.duel .computer .score');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const roundWinnerInfo = document.querySelector('.info h2');

function resetGameData() {
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
