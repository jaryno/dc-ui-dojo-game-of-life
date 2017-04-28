export default function gameOfLife(inputBoard) {
  const newBoard = [];
  for (let i = 0; i < inputBoard.length; i++) {
    newBoard[i] = [];
    for (let j = 0; j < inputBoard[i].length; j++) {
      let liveNeighbour = countLiveNeighbour(inputBoard, i, j);
      if (inputBoard[i][j] == '1' && liveNeighbour < 2) {
        newBoard[i][j] = '0';
      } else if (inputBoard[i][j] === '1' && (liveNeighbour === 2 || liveNeighbour === 3)) {
        newBoard[i][j] = '1';
      } else if (inputBoard[i][j] === '1' && liveNeighbour > 3) {
        newBoard[i][j] = '0';
      } else if (inputBoard[i][j] === '0' && liveNeighbour === 3) {
        newBoard[i][j] = '1';
      } else {
        newBoard[i][j] = '0';
      }
    }
  }
  return newBoard;
}

function countLiveNeighbour(board, x, y) {
  let count = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    if (i < 0 || i > board.length - 1) {
      continue;
    }
    for (let j = y - 1; j <= y + 1; j++) {
      if (j < 0 || j > board[i].length - 1) {
        continue;
      }
      if (board[i][j] === '1' && !(y === j && x === i)) {
        count++;
      }
    }
  }
  return count;
}
