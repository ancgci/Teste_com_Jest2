const { calculator } = require('./calculator');

test('A multiplicação de ultima e school é iqual a 300', () => {
    expect(calculator.multiply(3, 100)).toEqual(300);
});
