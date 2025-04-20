import { checkWin } from '../utils';

describe('checkWin', () => {
  it('detects a winning row', () => {
    const selected = Array(25).fill(false);
    [0,1,2,3,4].forEach(i => selected[i] = true);
    expect(checkWin(selected)).toBe(true);
  });

  it('detects a winning column', () => {
    const selected = Array(25).fill(false);
    [0,5,10,15,20].forEach(i => selected[i] = true);
    expect(checkWin(selected)).toBe(true);
  });

  it('detects a diagonal', () => {
    const selected = Array(25).fill(false);
    [0,6,12,18,24].forEach(i => selected[i] = true);
    expect(checkWin(selected)).toBe(true);
  });

  it('returns false when no win', () => {
    const selected = Array(25).fill(false);
    [0,1,2,3].forEach(i => selected[i] = true);
    expect(checkWin(selected)).toBe(false);
  });
});
