const { calculator } = require('./calculator');

test("num1 - num2 e 2", () => {
    expect(calculator.subtract(4, 2)).toEqual(2);
});