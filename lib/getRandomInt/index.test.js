const getRandomInt = require('./index');

describe('getRandomInt', () => {
  it('Does not give a number over the maximum', () => {
    const results = [];
    const maximum = 100;
    for (let i = 0; i < maximum; i += 1) {
      results.push(getRandomInt(maximum));
    }

    const everyNumberIsUnderMaximum = results.every(num => num < maximum);

    expect(everyNumberIsUnderMaximum).toBe(true);
  });
});
