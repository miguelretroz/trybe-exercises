const { expect } = require('chai');

const calculaSituacao = require('../calculaSituacao');

describe('Quando a média for menor que 7, retorna "reprovado":', () => {
  it('retorna "reprovado"', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });
});

describe('Quando a média for maior que 7, retorna "aprovado":', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(9);

    expect(resposta).to.be.equals('aprovado');
  });
});

describe('Quando a média for igual a 7, retorna "aprovado":', () => {
  it('retorna "aprovado"', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).equals('aprovado');
  });
});
