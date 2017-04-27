import expect from 'expect';

import gameOfLife from './gameOfLife.js';

import { arrayify, stringify } from './helpers.js';

describe('gameOfLife', () => {

  it('empty board stay empty', () => {
    let inputBoard = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);

    let expectedOutput = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);


    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });
});
