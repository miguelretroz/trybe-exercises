const api = require('./api');

const { describe, test, expect } = require('@jest/globals');

const requestReturn = [
  {
    id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    name: "Spirit",
    classification: "Spirit",
    eye_colors: "Red",
    hair_colors: "Light Orange",
    url:
      "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
    people: [
      "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
    ],
    films: [
      "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
    ]
  }
];

describe('Testando a requisição', () => {
  const apiURL = jest.spyOn(api, 'fetchURL');
  afterEach(apiURL.mockReset);

  test('Testando requisição caso a promise resolva', async () => {
    apiURL.mockResolvedValue('requisição realizada com sucesso');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    await expect(apiURL()).resolves.toBe('requisição realizada com sucesso');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  test('Testando requisição caso a promise seja rejeitada', async () => {
    apiURL.mockRejectedValue('a requisição falhou');

    expect(apiURL).toHaveBeenCalledTimes(0);
    await expect(apiURL()).rejects.toMatch('a requisição falhou');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });

  test('Testando requisição caso a promise resolva usando "requestReturn"', async () => {
    apiURL.mockResolvedValue(requestReturn);

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    await expect(apiURL()).resolves.toEqual([
      {
        id: "b5a92d0e-5fb4-43d4-ba60-c012135958e4",
        name: "Spirit",
        classification: "Spirit",
        eye_colors: "Red",
        hair_colors: "Light Orange",
        url:
          "https://ghibliapi.herokuapp.com/species/b5a92d0e-5fb4-43d4-ba60-c012135958e4",
        people: [
          "https://ghibliapi.herokuapp.com/people/ca568e87-4ce2-4afa-a6c5-51f4ae80a60b"
        ],
        films: [
          "https://ghibliapi.herokuapp.com/films/0440483e-ca0e-4120-8c50-4c8cd9b965d6"
        ]
      }
    ]);
  });
})