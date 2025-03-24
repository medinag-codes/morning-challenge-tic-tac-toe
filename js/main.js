// create a 2 player game of tic tac toe
// create board with 3 rows and 3 columns

// class/constructor to create different players
class Player {
    constructor(score, identity, isStarting){
        this.score = score;
        this.identity = identity;
        this.isStarting = isStarting;
    }
}

// identity X or O
const player1 = new Player(0, 'X', true);
const player2 = new Player(0, 'O', false);
const boardSquare = document.querySelectorAll('.boardSquare')
const resetBtn = document.querySelector('button')

// Loop throguh node list and add eventListener
for (let i = 0; i < boardSquare.length; i++){
    boardSquare[i].addEventListener('click', addXO)
}


// create a way to place x or o
    // one click = x 
    // 2 clicks = o
let counter = 0;
function addXO(e){
    counter++
    if(counter % 2 === 0){
        e.target.innerText = 'X';
    }else if(counter % 2 !== 0){
        e.target.innerText = 'O';
    }
}

//  conditional 
    // if result 1 === 2 ==== 3 
    // then winner
    // else, next player goes
// const winningCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6], 
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//     ];

// let winner = document.querySelector('p').innerText
// let next = document.querySelector('h3').innerText

// if(boardSquare[0] && boardSquare[0] === boardSquare[1] && boardSquare[0] === boardSquare[2]){
//     return winner = "You Win!"
// }else if(boardSquare[3] && boardSquare[3] === boardSquare[4] && boardSquare[3] === boardSquare[5]){
//     return winner = "You Win!"
// }else if(boardSquare[6] && boardSquare[6] === boardSquare[7] && boardSquare[6] === boardSquare[8]){
//     return winner = "You Win!"
// }else if(boardSquare[0] && boardSquare[0] === boardSquare[3] && boardSquare[0] === boardSquare[6]){
//     return winner = "You Win!"
// }else if(boardSquare[1] && boardSquare[1] === boardSquare[4] && boardSquare[1] === boardSquare[7]){
//     return winner = "You Win!"
// }else if(boardSquare[2] && boardSquare[2] === boardSquare[5] && boardSquare[2] === boardSquare[8]){
//     return winner = "You Win!"
// }else if(boardSquare[2] && boardSquare[2] === boardSquare[5] && boardSquare[2] === boardSquare[8]){
//     return winner = "You Win!"
// }else if(boardSquare[0] && boardSquare[0] === boardSquare[4] && boardSquare[0] === boardSquare[8]){
//     return winner = "You Win!"
// }else if(boardSquare[2] && boardSquare[2] === boardSquare[4] && boardSquare[2] === boardSquare[6]){
//     return winner = "You Win!"
// }else{
//     return next = "Next Player"
// }

// Reset the Game
resetBtn.addEventListener('click', reset)

function reset(){
    boardSquare.innerText = ''
}