var game, canvas, ctx, cols, rows, canvasWidth, canvasHeight, pointWidth, pointHeight;

var drawGrid = false;

function init(prop) {
    game = prop.game;
    canvas = prop.canvas;
    ctx = canvas.getContext("2d");
    cols = prop.cols;
    rows = prop.rows;
    canvasWidth = getCanvasWidth();
    canvasHeight = getCanvasHeight(); 

    pointWidth = canvasWidth / cols;
    pointHeight = canvasHeight / rows;
}

function grid() {
    if(!drawGrid) {
        return;
    }

    for(let i = 1; i < cols; i++) {
        drawLine(pointWidth * (i), pointWidth * (i), 0, canvasHeight);
    }

    for(var j = 1; j < rows; j++) {
        drawLine(0, canvasWidth, pointHeight * j, pointHeight * j);
    }
}

function getCanvasWidth() {
    return canvas.width;
}

function getCanvasHeight() {
    return canvas.height;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawLine(fromX, toX, fromY, toY) {
    ctx.beginPath();
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    //ctx.lineWidth = 1;
    ctx.strokeStyle = '#2e2e2e';
    ctx.stroke();
}

function drawPoint(x, y) {
    ctx.fillStyle = "#3d6f24"; //"#558b3a";
    ctx.fillRect(x, y, pointWidth - 1, pointHeight - 1);
}

function drawMatrix(mat) {
    clearCanvas();
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[i].length; j++) {
            if('1' === mat[i][j]) {
                drawPoint(j * pointWidth, i * pointHeight);
            }
        }
    }

    grid();
}

function getPosition(x, y) {
    var canvasArea = canvas.getBoundingClientRect();

    var xPos = x - canvasArea.left;
    var yPos = y - canvasArea.top; 

    if(xPos < 0 || xPos > canvasArea.width) {
        return null;
    }

    if(yPos < 0 || yPos > canvasArea.height) {
        return null;
    }

    return { x: ((xPos / pointWidth) | 0), y: ((yPos / pointHeight) | 0)  };
}

function gridOn() {
    drawGrid = true;
}

function gridOff() {
    drawGrid = false;
}

module.exports = {
    init: init,
    grid: grid,
    drawMatrix: drawMatrix,
    getPosition: getPosition,
    gridOn: gridOn,
    gridOff: gridOff
}