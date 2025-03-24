// create a 2 player game of tic tac toe
// create board with 3 rows and 3 columns

// class/constructor to create different players
class Player {
    constructor(identity, isStarting){
        this.identity = identity;
        this.isStarting = isStarting;
    }
}

// identity X or O
const player1 = new Player('X', true);
const player2 = new Player('O', false);
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

let winner = document.querySelector('p').innerText
let next = document.querySelector('h3').innerText
console.log(boardSquare[0].innerText)

function checkWin(){
    if(boardSquare[0].innerText && boardSquare[0].innerText === boardSquare[1].innerText && boardSquare[0].innerText === boardSquare[2].innerText){
        return winner = "You Win!"
    }else if(boardSquare[3].innerText && boardSquare[3].innerText === boardSquare[4].innerText && boardSquare[3].innerText === boardSquare[5].innerText){
        return winner = "You Win!"
    }else if(boardSquare[6].innerText && boardSquare[6].innerText === boardSquare[7].innerText && boardSquare[6].innerText === boardSquare[8].innerText){
        return winner = "You Win!"
    }else if(boardSquare[0].innerText && boardSquare[0].innerText === boardSquare[3].innerText && boardSquare[0].innerText === boardSquare[6].innerText){
        return winner = "You Win!"
    }else if(boardSquare[1].innerText && boardSquare[1].innerText === boardSquare[4].innerText && boardSquare[1].innerText === boardSquare[7].innerText){
        return winner = "You Win!"
    }else if(boardSquare[2].innerText && boardSquare[2].innerText === boardSquare[5].innerText && boardSquare[2].innerText === boardSquare[8].innerText){
        return winner = "You Win!"
    }else if(boardSquare[2].innerText && boardSquare[2].innerText === boardSquare[5].innerText && boardSquare[2].innerText === boardSquare[8].innerText){
        return winner = "You Win!"
    }else if(boardSquare[0].innerText && boardSquare[0].innerText === boardSquare[4].innerText && boardSquare[0].innerText === boardSquare[8].innerText){
        return winner = "You Win!"
    }else if(boardSquare[2].innerText && boardSquare[2].innerText === boardSquare[4].innerText && boardSquare[2].innerText === boardSquare[6].innerText){
        return winner = "You Win!"
    }else if(boardSquare[0].innerText && boardSquare[1].innerText && boardSquare[2].innerText && boardSquare[3].innerText && boardSquare[4].innerText && boardSquare[5].innerText && boardSquare[6].innerText && boardSquare[7].innerText && boardSquare[8].innerText){
        return winner = "It's a draw! Reset and try again"
    }
    else{
        return next = "Next Player"
    }
}
checkWin()

// Reset the Game
resetBtn.addEventListener('click', reset)

function reset(){
    boardSquare.innerText = ''
}