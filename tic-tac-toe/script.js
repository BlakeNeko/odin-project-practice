const gameBoard = (function () {
  const board = ['', '', '', '', '', '', '', '', ''];

  function getBoard() {
    return board;
  }

  function resetBoard() {
    for (let i = 0; i < board.length; i++) {
      board[i] = '';
    }
  }

  function updateBoard(id, playerSymbol) {
    board[id] = playerSymbol;
  }

  return {
    getBoard,
    resetBoard,
    updateBoard,
  };
})();

const Player = function (name, symbol) {
  return { name, symbol };
};

const gameController = (function () {
  const playerX = Player('Player X', 'X');
  const playerO = Player('Player O', 'O');
  let currentPlayer;
  let winner;
  let board;

  function initGame() {
    currentPlayer = Math.random() > 0.5 ? playerX : playerO;
    winner = null;
    board = gameBoard.getBoard();
    gameBoard.resetBoard();
  }

  function placeChess(id) {
    if (canPlaceChess(id)) {
      gameBoard.updateBoard(id, currentPlayer.symbol);
      return true;
    } else {
      return false;
    }
  }

  function canPlaceChess(id) {
    if (board[id] === '') {
      return true;
    } else {
      return false;
    }
  }

  function isWin() {
    // check rows
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== '') {
      winner = currentPlayer;
      return true;
    } else if (
      board[3] === board[4] &&
      board[4] === board[5] &&
      board[3] !== ''
    ) {
      winner = currentPlayer;
      return true;
    } else if (
      board[6] === board[7] &&
      board[7] === board[8] &&
      board[6] !== ''
    ) {
      winner = currentPlayer;
      return true;
    }

    // check columns
    else if (
      board[0] === board[3] &&
      board[3] === board[6] &&
      board[0] !== ''
    ) {
      winner = currentPlayer;
      return true;
    } else if (
      board[1] === board[4] &&
      board[4] === board[7] &&
      board[1] !== ''
    ) {
      winner = currentPlayer;
      return true;
    } else if (
      board[2] === board[5] &&
      board[5] === board[8] &&
      board[2] !== ''
    ) {
      winner = currentPlayer;
      return true;
    }

    // check diagonals
    else if (
      board[0] === board[4] &&
      board[4] === board[8] &&
      board[0] !== ''
    ) {
      winner = currentPlayer;
      return true;
    } else if (
      board[2] === board[4] &&
      board[4] === board[6] &&
      board[2] !== ''
    ) {
      winner = currentPlayer;
      return true;
    } else {
      return false;
    }
  }

  function isDraw() {
    return board.every((cell) => {
      if (cell !== '') {
        return true;
      } else {
        return false;
      }
    });
  }

  function switchPlayer() {
    if (currentPlayer === playerX) {
      currentPlayer = playerO;
    } else {
      currentPlayer = playerX;
    }
  }

  function getWinnerName() {
    return winner.name;
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  return {
    initGame,
    placeChess,
    isWin,
    isDraw,
    switchPlayer,
    getWinnerName,
    getCurrentPlayer,
  };
})();

const displayController = (function () {
  const boxes = document.querySelectorAll('.box');
  const resetButton = document.querySelector('.reset');
  const gameStatus = document.querySelector('#game-status');

  function initBoard() {
    resetBoard();
    setEventListener();
    updateCurrentPlayer();
  }

  function resetBoard() {
    boxes.forEach((box) => {
      box.textContent = '';
    });
  }

  function updateCurrentPlayer() {
    gameStatus.textContent = gameController.getCurrentPlayer().name;
  }

  function handleClick(event) {
    let box = event.target;
    let boxId = box.getAttribute('id');
    if (gameController.placeChess(boxId)) {
      box.textContent = gameController.getCurrentPlayer().symbol;
    } else {
      alert('You can not place chess here!');
      return;
    }

    if (gameController.isWin()) {
      gameStatus.textContent = `Winner is ${gameController.getWinnerName()}`;
      removeEventListener();
    } else if (gameController.isDraw()) {
      gameStatus.textContent = 'Draw';
      removeEventListener();
    } else {
      gameController.switchPlayer();
      updateCurrentPlayer();
    }
  }

  function setEventListener() {
    boxes.forEach((box) => {
      box.addEventListener('click', handleClick);
    });

    resetButton.addEventListener('click', () => {
      gameController.initGame();
      resetBoard();
      setEventListener();
      updateCurrentPlayer();
    });
  }

  function removeEventListener() {
    boxes.forEach((box) => {
      box.removeEventListener('click', handleClick);
    });
  }

  return {
    initBoard,
  };
})();

gameController.initGame();
displayController.initBoard();
