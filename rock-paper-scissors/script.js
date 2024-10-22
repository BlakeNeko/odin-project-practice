let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function getHumanChoice() {
  let choice = prompt('Enter rock, paper, or scissors');

  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice.toLowerCase();
  } else {
    console.log('Invalid choice. Please enter rock, paper, or scissors.');
    return getHumanChoice();
  }
}

function playRound(humanChoice, computerChoice) {
  console.log(`You chose ${humanChoice}.`);
  console.log(`The computer chose ${computerChoice}.`);

  if (humanChoice === computerChoice) {
    console.log('It is a tie!');
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    console.log('You win!');
    humanScore++;
  } else {
    console.log('You lose!');
    computerScore++;
  }
}

function playGame() {
  for (let roundNum = 1; roundNum <= 5; roundNum++) {
    console.log(`Round ${roundNum}`);
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log('\n');
  }

  if (humanScore > computerScore) {
    console.log('You won the game!');
  } else if (humanScore < computerScore) {
    console.log('The computer won the game!');
  } else {
    console.log('The game is a tie!');
  }
}

playGame();
