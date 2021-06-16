const { test, expect } = require('@jest/globals');
const service = require('./service');

test('#randomRgbColor', () => {
  service.randomRgbColor = jest.fn();

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});