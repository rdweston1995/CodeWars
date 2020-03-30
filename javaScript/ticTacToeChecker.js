/** 
 * Write a function to check if the results of a game of tic-Tac-Toe
 * Format will be 
 * [0, 0, 2]
 * [1, 0, 2]
 * [2, 1, 1]
 * 
 * return -1 if theres any 0 left
 * return 1 if X won
 * return 2 if O won
 * return 0 if its a draw
 */
let board = [[0, 0, 2], [1, 0, 2], [2, 1, 1]];

console.log(tttChecker(board));

 function tttChecker(board) {
    for(let i = 0; i < 3; i++) {
        for(let k = 0; k < 3; k++) {
            if(board[i][k] === 0) {return -1}
            
        }
    }
 }