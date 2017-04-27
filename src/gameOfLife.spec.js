import expect from 'expect';

import gameOfLife from './gameOfLife';

import { arrayify } from './helpers';

describe('gameOfLife', () => {
  it('empty board stay empty', () => {
    const inputBoard = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);

    const expectedOutput = arrayify(`
      0000 0000
      0000 0000
      0000 0000
      0000 0000
    `);


    expect(gameOfLife(inputBoard)).toEqual(expectedOutput);
  });
});
