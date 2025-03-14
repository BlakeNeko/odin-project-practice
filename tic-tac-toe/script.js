const gameStatus = (function () {
  let board = [];
  let currentPlayer = 'X';

  function resetBoard() {
    board = Array(9).fill('');
  }

  function randomChoosePlayer() {
    return Math.random() < 0.5 ? 'X' : 'O';
  }

  function placeChess(location) {
    if (board[location] !== '') {
      alert('You cannot place your chess there!');
    }

    board[location] = currentPlayer;
  }

  return {
    resetBoard,
    randomChoosePlayer,
  };
})();
