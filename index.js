const columns = 30;
const rows = 30;
const blockSize = 20;
let currentX = blockSize * 10;
let currentY = blockSize * 10;
// ms
const speed = 200;
const board = document.querySelector('#snake');
const context = board.getContext('2d');

let currentInterval;
let lastMove;

let randomX = Math.floor(Math.random() * 29);
let randomY = Math.floor(Math.random() * 29);

function drawCanvas() {
    board.width = columns * blockSize;
    board.height = rows * blockSize;

    context.fillStyle = 'black';
    context.fillRect(0, 0, board.width, board.height)
}

function drawSnake() {
    context.fillStyle = 'green';
    // x, y
    context.fillRect(currentX, currentY, blockSize, blockSize);
}

function moveSnake() {
    drawSnake();
    window.addEventListener('keydown', (e) => {
        clearInterval(currentInterval)
        switch(e.key) {
            // left
            case 'ArrowLeft':
                if (lastMove == 'right') {
                    currentInterval = setInterval(goRight, speed)
                    lastMove = 'right';
                    break
                } else {
                    currentInterval = setInterval(goLeft, speed)
                    lastMove = 'left';
                    break
                }

            // up
            case 'ArrowUp':
                if (lastMove == 'down') {
                    currentInterval = setInterval(goDown, speed)
                    lastMove = 'down';
                    break
                } else {
                    currentInterval = setInterval(goUp, speed)
                    lastMove = 'up';
                    break
                }
                
            //right
            case 'ArrowRight':
                if (lastMove == 'left') {
                    currentInterval = setInterval(goLeft, speed)
                    lastMove = 'left';
                    break
                } else {
                    currentInterval = setInterval(goRight, speed)
                    lastMove = 'right';
                    break
                }
            
            // down             
            case 'ArrowDown':
                if (lastMove == 'up') {
                    currentInterval = setInterval(goUp, speed)
                    lastMove = 'up';
                    break
                } else {
                    currentInterval = setInterval(goDown, speed)
                    lastMove = 'down';
                    break
                }
        }
    })
}
///////////////////////////////////////////////

function goRight() {

    currentX += blockSize;
    if (currentX >= board.width) {
        currentX = 0
    }
    drawCanvas();
    context.fillStyle = 'green';
    context.fillRect(currentX, currentY, blockSize, blockSize);

    drawFood()
}

function goLeft() {
    
    currentX -= blockSize;
    if (currentX < 0) {
        currentX = board.width - blockSize
    }
    drawCanvas();
    context.fillStyle = 'green';
    context.fillRect(currentX, currentY, blockSize, blockSize);

    drawFood()
}

function goUp() {

    currentY -= blockSize;
    if (currentY < 0) {
        currentY = board.height - blockSize
    }
    drawCanvas();
    context.fillStyle = 'green';
    context.fillRect(currentX, currentY, blockSize, blockSize);

    drawFood()
}

function goDown() {

    currentY += blockSize;
    if (currentY >= board.height) {
        currentY = 0
    }
    drawCanvas();
    context.fillStyle = 'green';
    context.fillRect(currentX, currentY, blockSize, blockSize);

    drawFood()
}

let size = [1, 2, 3, 4, 5, 
    6, 7, 8, 9, 10, 11, 12, 
    13, 14, 15,16,17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 
    27, 28 , 29, 30];

//
function drawFood() {
    context.fillStyle = 'red';
    context.fillRect(size[randomX] * blockSize, size[randomY] * blockSize, blockSize, blockSize)
}



// on reload
drawCanvas()
moveSnake()
drawFood()