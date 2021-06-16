const uppercase = require('../src/01-uppercase');
const { describe, test, expect } = require('@jest/globals');

describe('Testando com callback', () => {
  test('Transformando string', (done) => {
    const checkText = (text) => {
      expect(text).toBe('EU ESTOU COM A FORÇA, A FORÇA ESTÁ COMIGO');
      done();
    };
    const theForce = 'eu estou com a força, a força está comigo';
    uppercase(theForce, checkText);
  });
});