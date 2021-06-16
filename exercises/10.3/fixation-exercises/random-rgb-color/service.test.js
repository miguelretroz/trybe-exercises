const { test, expect } = require('@jest/globals');
const service = require('./service');

test('#randomRgbColor', () => {
  service.randomRgbColor = jest.fn();
  service.randomRgbColor.mockReturnValue('rgb(255, 255, 255)');

  console.log(service.randomRgbColor());
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe('rgb(255, 255, 255)');
});