const { expect } = require('chai');

const numberChecker = require('../numberChecker');

describe('numberChecker', () => {
  describe('Quando o número é maior que 0:', () => {
    describe('a resposta', () => {
      const response = numberChecker(5);

      it('é uma string', () => {
        expect(response).to.be.a('string');
      });

      it('é a mensagem "positivo"', () => {
        expect(response).to.be.equals('positivo');
      });
    });
  });

  describe('Quando o número é menor que 0:', () => {
    describe('a resposta', () => {
      const response = numberChecker(-5);
      console.log(response);

      it('é uma string', () => {
        expect(response).to.be.a('string');
      });

      it('é a mensagem "negativo"', () => {
        expect(response).to.be.equals('negativo');
      });
    });
  });

  describe('Quando o número é igual a 0:', () => {
    describe('a resposta', () => {
      const response = numberChecker(0);

      it('é uma string', () => {
        expect(response).to.be.a('string');
      });

      it('é a mensagem "neutro"', () => {
        expect(response).to.be.equals('neutro');
      });
    });
  });

  describe('Quando o valor não é um número:', () => {
    describe('a resposta', () => {
      const response = numberChecker('TDD');

      it('é uma string', () => {
        expect(response).to.be.a('string');
      });

      it('é a mensagem "o valor dever ser um número"', () => {
        expect(response).to.be.equals('o valor dever ser um número');
      });
    });
  });
});