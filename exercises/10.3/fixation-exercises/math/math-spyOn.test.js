const { test, expect } = require('@jest/globals');

const math = require('./math');

test('#somar spyOn', () => {
  const mockSomar = jest.spyOn(math, 'somar');

  mockSomar.mockImplementation((a, b) => a + b);
  mockSomar(1, 2);

  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).toBe(3);
});