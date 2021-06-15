const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três');
assert.strictEqual(expected, 3, 'Um mais dois é igual a três');
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)');