import gameOfLife from './gameOfLife';

var rows, cols, _matrix, draw;

function init(prop) {

    _matrix = prop.matrix;

    cols = _matrix[0].length;
    rows = _matrix.length;
    
    draw = prop.draw;
    draw.init({
        canvas: prop.canvas,
        cols: cols,
        rows: rows
    });

    //draw.grid();
}

function getRows() {
    return rows;
}

function getCols() {
    return cols;
}

function setMatrix(mat) {
    _matrix = mat;
}

function nextStep() {
    _matrix = gameOfLife(_matrix);
    paint();
}

function paint() {
    draw.drawMatrix(_matrix);
}

function setPointByMouseClick(x, y) {
    var pos = draw.getPosition(x, y);
    if(!pos) {
        paint();
        return;
    }

    _setPoint(pos.x, pos.y);
    paint();
}

function _setPoint(cell, row) {
    if(_matrix[row][cell] === '1') {
        _matrix[row][cell] = '0';
    } else {
        _matrix[row][cell] = '1';
    }
}

function randomGeneratePoints() {
    for(let i = 0; i < _matrix.length; i++) {
        for(let j = 0; j < _matrix[i].length; j++) {
            if(Math.random() < 0.08) {
                _setPoint(i, j);
            }
        }
    }
    paint();
}

function clear() {
    for(let i = 0; i < _matrix.length; i++) {
        for(let j = 0; j < _matrix[i].length; j++) {
            _matrix[i][j] = '0';
        }
    }
    paint();
}

module.exports = {
    init: init,
    paint: paint,
    getRows: getRows,
    getCols: getCols,
    setMatrix: setMatrix,
    nextStep: nextStep,
    setPointByMouseClick: setPointByMouseClick,
    randomGeneratePoints: randomGeneratePoints,
    clear: clear
}