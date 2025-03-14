const gameStatus = (function () {
  let board = [];
  let currentPlayer = 'X';

  function resetBoard() {
    board = Array(9).fill('');
  }

  return {
    resetBoard,
  };
})();
