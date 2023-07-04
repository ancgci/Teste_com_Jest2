const { calculator } = require('./calculator');

test('A soma de ultima e school é iqual a 100', () => {
    expect(calculator.sum(50,50)).toEqual(100);
});