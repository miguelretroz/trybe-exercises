const { getUserName } = require('../src/03-users');
const { describe, test, expect } = require('@jest/globals');

describe('Testando getUserName', () => {
  test('Buscando um usuário por ID', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });
});