const { test, expect } = require('@jest/globals');

const math = require('./math');

test('#somar', () => {

  expect(math.somar(1, 2)).resolves.toBe(3);

  const mockSomar = jest
  .spyOn(math, 'somar')
  .mockImplementation((a, b) => a - b);

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(math.somar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(math.somar).toHaveBeenLastCalledWith(5, 1);

  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});