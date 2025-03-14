const gameStatus = (function () {
  let board = [];
  let currentPlayer = 'X';

  function resetBoard() {
    board = Array(9).fill('');
  }

  function randomChoosePlayer() {
    return Math.random() < 0.5 ? 'X' : 'O';
  }

  function placeChess(position) {
    if (board[position] !== '') {
      alert('You cannot place your chess there!');
    }

    board[position] = currentPlayer;
  }

  function checkWinner() {
    let winConditons = [
      // 行
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // 列
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // 对角线
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let condition of winConditons) {
      let [pos1, pos2, pos3] = condition;
      if (
        board[pos1] !== '' &&
        board[pos1] === board[pos2] &&
        board[pos2] === board[pos3]
      ) {
        return board[pos1];
      }
    }

    if (board.every((each) => each !== '')) {
      return 'tie';
    }

    return null;
  }

  function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  return {
    resetBoard,
    randomChoosePlayer,
    placeChess,
    checkWinner,
    switchPlayer,
  };
})();
