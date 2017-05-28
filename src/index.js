import gameOfLife from './gameOfLife.js';
import * as draw from './draw.js';
import * as ui from './ui.js';
import * as game from './game.js';
import * as engine from './engine.js';
import { arrayify } from './helpers';

ui.setGame(game);
ui.setEngine(engine);
ui.setDraw(draw);

var matrix = [];
for(let i = 0; i < 80; i++) {
    matrix[i] = [];
    for(let j = 0; j < 80; j++) {

        matrix[i][j] = "0";
    }
}

/*var matrix = arrayify(`
      0010 0000
      0100 0000
      0010 0000
      0000 0000
      0000 0000
      0000 0000
      0000 0000
      0000 0000
`);*/

game.init({
    matrix: matrix,
    draw: draw,
    canvas: ui.getCanvas()
});

game.setMatrix(matrix);
draw.drawMatrix(matrix);

engine.setFps(2);
engine.setOnTick(game.nextStep);