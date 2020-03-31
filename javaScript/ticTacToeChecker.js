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
let board1 = [[0, 0, 2], [1, 0, 2], [2, 1, 1]];
let board2 = [[2, 2, 2], [0, 1, 1], [1, 0, 0]];
let board3 = [[0, 0, 2], [0, 0, 0], [1, 0, 1]];

console.log(tttChecker(board1)); //Return -1
console.log(tttChecker(board2)); //Return 2
console.log(tttChecker(board3)); //Return -1

// console.log(true || false);

function tttChecker(board) {
    if(board[0][0] === board[0][1] && board[0][0] === board[0][2] && board[0][0] !== 0) {return board[0][0]}
    else if(board[0][0] === board[1][0] && board[0][0] === board[2][0] && board[0][0] !== 0) {return board[0][0]}
    else if(board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== 0) {return board[0][0]}
    else if(board[1][1] === board[0][1] && board[1][1] === board[2][1] && board[1][1] !== 0) {return board[1][1]}
    else if(board[1][1] === board[1][0] && board[1][1] === board[1][2] && board[1][1] !== 0) {return board[1][1]}
    else if(board[1][1] === board[2][0] && board[1][1] === board[0][2] && board[1][1] !== 0) {return board[1][1]}
    else if(board[0][2] === board[1][2] && board[0][2] === board[2][2] && board[2][2] !== 0) {return board[2][2]}
    else if(board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] !== 0) {return board[2][2]}
    else if(board[0].indexOf(0) !== -1) {return -1}
    else if(board[1].indexOf(0) !== -1) {return -1}
    else if(board[2].indexOf(0) !== -1) {return -1}
    else {return 0}
    
}