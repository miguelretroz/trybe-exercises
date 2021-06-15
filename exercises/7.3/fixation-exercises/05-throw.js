const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5);
assert.throws( _ => { division(10, 0); }, /^Error: parameter y must not be 0$/);