const { test, expect } = require('@jest/globals');

const { somar, subtrait, multiplicar, dividir } = require('./math');

jest.mock('./math');

test('#somar', () => {

  somar.mockImplementation((a, b) => a + b);
  somar(1, 2);

  expect(somar).toHaveBeenCalled();
  expect(somar).toHaveBeenCalledTimes(1);
  expect(somar).toHaveBeenCalledWith(1, 2);
  expect(somar(1, 2)).toBe(3);
});