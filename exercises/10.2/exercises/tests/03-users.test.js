const { getUserName } = require('../src/03-users');
const { describe, test, expect } = require('@jest/globals');

describe('Testando getUserName - Async/Await', () => {
  test('Buscando um usuário por ID', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });

  test('Buscando um usuário inválido', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch(error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  });
});