const gameStatus = (function () {
  let board = [];
  let currentPlayer = 'X';

  function resetBoard() {
    board = Array(9).fill('');
    currentPlayer = randomChoosePlayer();
  }

  function randomChoosePlayer() {
    return Math.random() < 0.5 ? 'X' : 'O';
  }

  function placeChess(position) {
    if (board[position] !== '') {
      alert('不能在此处下子');
      return false;
    }

    board[position] = currentPlayer;
    return true;
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

  function getBoard() {
    return board;
  }

  function getCurrentPlayer() {
    return currentPlayer;
  }

  return {
    resetBoard,
    randomChoosePlayer,
    placeChess,
    checkWinner,
    switchPlayer,
    getBoard,
    getCurrentPlayer,
  };
})();

const renderer = (function () {
  const boardElement = document.querySelector('.board');
  const messageElement = document.querySelector('.message');
  const restartButton = document.querySelector('button');
  const boxes = document.querySelectorAll('.box');

  function updateBoard() {
    let board = gameStatus.getBoard();
    boxes.forEach((box, index) => {
      box.textContent = board[index];
    });
  }

  function updateMessage(message) {
    messageElement.textContent = message;
  }

  function toggleRestartButton(show) {
    restartButton.style.display = show ? 'block' : 'none';
  }

  function handleBoxClick(event) {
    // 处理数字 id（1-9）转换为数组索引（0-8）
    const index = parseInt(event.target.id, 10) - 1;

    if (gameStatus.placeChess(index)) {
      updateBoard();

      const winner = gameStatus.checkWinner();
      if (winner) {
        updateMessage(winner === 'tie' ? '游戏平局！🤝' : `${winner} 获胜！🎉`);
        toggleRestartButton(true);
      } else {
        gameStatus.switchPlayer();
        updateMessage(`${gameStatus.getCurrentPlayer()} 的回合`);
      }
    }
  }

  function bindEvents() {
    boardElement.addEventListener('click', (event) => {
      if (event.target.classList.contains('box')) {
        handleBoxClick(event);
      }
    });

    restartButton.addEventListener('click', () => {
      gameStatus.resetBoard();
      updateBoard();
      toggleRestartButton(false);
      updateMessage(`${gameStatus.getCurrentPlayer()} 的回合`);
    });
  }

  return {
    updateBoard,
    updateMessage,
    toggleRestartButton,
    bindEvents,
  };
})();

gameStatus.resetBoard();
renderer.bindEvents();
renderer.updateMessage(`${gameStatus.getCurrentPlayer()} 的回合`);
