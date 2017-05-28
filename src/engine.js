var _intervalId = null;
var _fps = 1;
var _onTick = function() {};


function start() {
    if(_intervalId !== null) {
        return;
    }

    _intervalId = setInterval(_onTick, 1000 / _fps);
}

function setOnTick(func) {
    _onTick = func;
}

function stop() {
    clearInterval(_intervalId);
    _intervalId = null; 
}

function setFps(f) {
    _fps = f;
}

module.exports = {
    start: start,
    stop: stop,
    setOnTick: setOnTick,
    setFps: setFps
}