const { calculator } = require('./calculator');

test('A divisão de ultima e school é iqual a ', () => {
    expect(calculator.divide(500,50)).toEqual(10);
});