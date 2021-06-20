const { describe, test, expect } = require('@jest/globals');

const math = require('./math');

describe('Para fixar...', () => {

  test('Subtrair', () => {
    math.subtrair = jest.fn();

    expect(math.subtrair()).toBe(undefined);
    math.subtrair.mockImplementation((a, b) => a * b);
    expect(math.subtrair).toHaveBeenCalled();
    expect(math.subtrair(1, 3)).toBe(3);
    expect(math.subtrair).toHaveBeenCalledTimes(2);
  });

  test('Multiplicar', () => {
    math.multiplicar = jest.fn();

    expect(math.multiplicar()).toBe(undefined);
    expect(math.multiplicar).toHaveBeenCalled();
    
    math.multiplicar.mockReturnValue(10);
    expect(math.multiplicar()).toBe(10);
    expect(math.multiplicar).toHaveBeenCalledTimes(2);
  });
});