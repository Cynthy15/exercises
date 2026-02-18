
//Exercise 16: Looping Through a Matrix

let gamesBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

let sum = 0;

// Nested loops to iterate through the matrix
for (let i = 0; i < gamesBoard.length; i++) {
  for (let j = 0; j < gamesBoard[i].length; j++) {
    console.log(gamesBoard[i][j]); 
    sum += gamesBoard[i][j];     
  }
}

// Print total sum
console.log("Sum of all elements:", sum);