var game, engine, draw;

function setGame(g) {
    game = g;
}

function setEngine(e) {
    engine = e;
}

function setDraw(d) {
    draw = d;
}

var canvas = document.getElementById("gameCanvas");

setCanvasDimensions(canvas);

function calcCanvasDimensions() {
    var ratio = 1;
    var cvsWidth = window.innerWidth;
    var cvsHeight = cvsWidth; // window.innerHeight;

    if(window.innerWidth > window.innerHeight) {
        cvsWidth = cvsHeight = window.innerHeight;
    }

    return {
        width: cvsWidth,
        height: cvsHeight
    }
}

function setCanvasDimensions(cvs) {
    var cvsDim = calcCanvasDimensions();
    cvs.width = cvsDim.width;
    cvs.height = cvsDim.height;
}

window.addEventListener('resize', function() {
    setCanvasDimensions(canvas);
});

canvas.addEventListener('click', function(e) {
    game.setPointByMouseClick(e.clientX, e.clientY);
}, false);

canvas.addEventListener('mouseenter', function(e) {
    draw.gridOn();
    game.paint();
}, false);

canvas.addEventListener('mouseleave', function(e) {
    draw.gridOff();
    game.paint();
}, false);

function getCanvas() {
    return canvas;
}

var btnNext = document.getElementById("btnNext");
btnNext.addEventListener('click', function(e) {
    game.nextStep();
    e.stopPropagation();
});

var btnPlay = document.getElementById("btnPlay");
btnPlay.addEventListener('click', function(e) {
    engine.start();
    e.stopPropagation();
    btnPlay.classList.add('active');
});

var btnStop = document.getElementById("btnStop");
btnStop.addEventListener('click', function(e) {
    engine.stop();
    btnPlay.classList.remove('active');
    e.stopPropagation();
});

var btnOpen = document.getElementById("btnOpen");
btnOpen.addEventListener('click', function(e) {

    var menu = document.getElementById("menu");

    if(menu.classList.contains("slide-in")) {
        menu.classList.remove("slide-in");
        menu.classList.add("slide-out");
    } else {
        menu.classList.remove("slide-out");
        menu.classList.add("slide-in");
    }

    
    e.stopPropagation();
});

module.exports = {
    getCanvas: getCanvas,
    setGame: setGame,
    setEngine: setEngine,
    setDraw: setDraw 
};