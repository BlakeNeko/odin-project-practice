let humanScore = 0;
let computerScore = 0;

let rockButton = document.querySelector('.rock');
let paperButton = document.querySelector('.paper');
let scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  let eachRoundMessageElement = document.querySelector('.message .each-round');
  let eachRoundMessageText = `You chose ${humanChoice}. The computer chose ${computerChoice}.`;

  let finalMessageElement = document.querySelector('.message .final-message');
  let finalMessageText = '';

  let humanScoreElement = document.querySelector('.human');
  let computerScoreElement = document.querySelector('.computer');

  // When a new round starts, there is no need to show the final message
  if (humanScore === 0 && computerScore === 0) {
    finalMessageElement.textContent = finalMessageText;
  }

  eachRoundMessageElement.textContent = eachRoundMessageText;

  if (humanChoice === computerChoice) {
    eachRoundMessageText += 'It is a tie!';
    eachRoundMessageElement.textContent = eachRoundMessageText;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    eachRoundMessageText += ' You win this round!';
    eachRoundMessageElement.textContent = eachRoundMessageText;
    humanScore++;
    humanScoreElement.textContent = `Human: ${humanScore}`;
  } else {
    eachRoundMessageText += ' You lose this round!';
    eachRoundMessageElement.textContent = eachRoundMessageText;
    computerScore++;
    computerScoreElement.textContent = `Computer: ${computerScore}`;
  }

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      finalMessageText = 'You won the game!';
    } else if (humanScore < computerScore) {
      finalMessageText = 'The computer won the game!';
    } else {
      finalMessageText = 'The game is a tie!';
    }
    finalMessageElement.textContent = finalMessageText;
    humanScore = 0;
    computerScore = 0;
    humanScoreElement.textContent = 'Human: 0';
    computerScoreElement.textContent = 'Computer: 0';
  }
}
