module.exports = function solveSudoku(matrix) {
  return solveBoard(matrix) ? matrix : null;
}

const isValidBoard = (board, row, col, cell) => {
  for (let i = 0; i < 9; i++) {
    const hBox = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const vBox = 3 * Math.floor(col / 3) + i % 3;
    
    if (board[row][i] == cell || board[i][col] == cell || board[hBox][vBox] == cell) {
      return false;
    }
  }

  return true;
};

 const solveBoard = (data) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (data[i][j] == 0) {
          for (let k = 1; k <= 9; k++) {
            if (isValidBoard(data, i, j, k)) {
              data[i][j] = k;

             if (solveBoard(data)) {
               return true;
             } else {
               data[i][j] = 0;
             }
           }
         }
         return false;
       }
     }
   }
   return true;
 };
