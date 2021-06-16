const { getUserName } = require('../src/02-users');
const { describe, test, expect } = require('@jest/globals');

describe('Testando getUserName', _ => {
  test('Buscando usuário por ID', () => {
    expect.assertions(1);

    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });
});