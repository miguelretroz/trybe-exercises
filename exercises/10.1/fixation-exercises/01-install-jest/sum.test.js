const sum = (a, b) => a + b;

test('Sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});