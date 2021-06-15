const assert = require('assert');

function division(x, y) {
  return x / y;
}

assert.strictEqual(division(10, 10), 1);
assert.strictEqual(division(10, 0), 0);