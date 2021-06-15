const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    };
  }
  return newArr;
}

// implemente seus testes aqui
assert.strictEqual(typeof myRemove, 'function');
const numbers = [1, 2, 3, 4];
assert.deepStrictEqual(myRemove(numbers, 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove(numbers, 3), [1, 2, 3, 4]);
myRemove(numbers, 3);
assert.deepStrictEqual(numbers, [1, 2, 3, 4]);
assert.deepStrictEqual(myRemove(numbers, 5), [1, 2, 3, 4]);