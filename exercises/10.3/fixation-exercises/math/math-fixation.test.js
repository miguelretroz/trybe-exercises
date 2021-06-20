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
});