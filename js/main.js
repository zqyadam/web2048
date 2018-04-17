let board = new Array();
let score = 0;

$(document).ready(function () {
    newGame();
});


function newGame() {
    // init board
    initBoard();
}


function initBoard() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let gridCell = $('#grid-cell-' + i + '-' + j);
            gridCell.css('top', getPosTop(i, j));
            gridCell.css('left', getPosLeft(i, j));
        }
    }

    for (let i = 0; i < 4; i++) {
        board[i] = new Array();
        for (let j = 0; j < 4; j++) {
            board[i][j] = 0;
        }
    }

    generateOneNumber();
    generateOneNumber();
    updateBoardView();
}


function updateBoardView() {
    $('.number-cell').remove();

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let numberCellStr = `<div class="number-cell" id="number-cell-${i}-${j}"></div>`
            $('#grid-container').append(numberCellStr);
            let theNumberCell = $(`#number-cell-${i}-${j}`);

            if (board[i][j] == 0) {
                theNumberCell.css('height', '0px');
                theNumberCell.css('width', '0px');
                theNumberCell.css('top', getPosTop(i, j) + 50);
                theNumberCell.css('left', getPosLeft(i, j) + 50);

            } else {
                theNumberCell.css('height', '100px');
                theNumberCell.css('width', '100px');
                theNumberCell.css('top', getPosTop(i, j));
                theNumberCell.css('left', getPosLeft(i, j));
                theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color', getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
        }
    }
}


function generateOneNumber() {
    if (nospace(board)) {
        return false;
    }

    let randX = parseInt(Math.random() * 4);
    let randY = parseInt(Math.random() * 4);

    console.log(randX);
    console.log(randY);

    while (board[randX][randY] != 0) {
        let randX = parseInt(Math.random() * 4);
        let randY = parseInt(Math.random() * 4);
    }

    let randNumber = Math.random < 0.5 ? 2 : 4;

    board[randX][randY] = randNumber;

    showNumberWithAnimation(randX, randY, randNumber);
    
    return true;
}


function nospace(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return false
            }
        }
    }
    return true;
}
