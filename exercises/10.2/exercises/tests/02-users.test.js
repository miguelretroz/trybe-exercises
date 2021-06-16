const { getUserName } = require('../src/02-users');
const { describe, test, expect } = require('@jest/globals');

describe('Testando getUserName', () => {
  test('Buscando usuário por ID', () => {
    expect.assertions(1);

    return getUserName(4).then((name) => {
      expect(name).toBe('Mark');
    });
  });

  test('Buscando usuário com ID inválido', () => {
    expect.assertions(1);
    const idToTest = 1;
    return getUserName(idToTest).catch((error) => {
      expect(error).toEqual({ error: `User with ${idToTest} not found.`});
    });
  });
});