
// FINAL CHALLENGE
// Tic-Tac-Toe Board Analyzer

//  Board Setup
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

//  Place Moves
board[0][0] = "X";
board[1][1] = "O";

console.log(board);

// Check for Win Function
function checkWin(board, playerSymbol) {

  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      board[i][0] === playerSymbol &&
      board[i][1] === playerSymbol &&
      board[i][2] === playerSymbol
    ) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (
      board[0][j] === playerSymbol &&
      board[1][j] === playerSymbol &&
      board[2][j] === playerSymbol
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    board[0][0] === playerSymbol &&
    board[1][1] === playerSymbol &&
    board[2][2] === playerSymbol
  ) {
    return true;
  }

  if (
    board[0][2] === playerSymbol &&
    board[1][1] === playerSymbol &&
    board[2][0] === playerSymbol
  ) {
    return true;
  }

  return false;
}

// Test checkWin
console.log("Did X win?", checkWin(board, "X"));
console.log("Did O win?", checkWin(board, "O"));
