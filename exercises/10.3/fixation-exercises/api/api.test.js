const api = require('./api');

const { describe, test, expect } = require('@jest/globals');

describe('Testando a requisição', () => {
  const apiURL = jest.spyOn(api, 'fetchURL');
  afterEach(apiURL.mockReset);

  test('Testando requisição caso a promise resolva', async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test('Testando requisição caso a promise seja rejeitada', async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
})