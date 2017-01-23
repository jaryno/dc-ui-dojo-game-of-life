import expect from 'expect';

import gameOfLife from './gameOfLife.js';

describe('gameOfLife', () => {
  it('return true', () => {
    expect(gameOfLife()).toBeTruthy();
  });
});
