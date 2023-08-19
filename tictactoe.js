let currentPlayer = 'x';
let gameBoard = Array(9).fill('');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(cellIndex) {
  if (gameBoard[cellIndex] === '' && !checkWinner()) {
    gameBoard[cellIndex] = currentPlayer;
    const cell = document.getElementsByClassName('cell')[cellIndex];
    cell.textContent = currentPlayer;
    cell.classList.add(currentPlayer);
    
    if (checkWinner()) {
      document.getElementById('status').textContent = `Player ${currentPlayer.toUpperCase()} wins!`;
    } else if (!gameBoard.includes('')) {
      document.getElementById('status').textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
    }
  }
}

function checkWinner() {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameBoard = Array(9).fill('');
  currentPlayer = 'x';
  const cells = document.getElementsByClassName('cell');
  for (const cell of cells) {
    cell.textContent = '';
    cell.classList.remove('x', 'o');
  }
  document.getElementById('status').textContent = '';
}

resetGame();
