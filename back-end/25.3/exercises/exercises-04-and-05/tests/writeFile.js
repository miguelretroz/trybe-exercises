const fs = require('fs').promises;
const { expect } = require('chai');
const sinon = require('sinon');

const writeFile = require('../writeFile');

describe('Função writeFile', () => {
  describe('Quando a função é chamada', () => {
    before(() => {
      sinon.stub(fs, 'writeFile').resolves('ok');
    });

    after(() => {
      fs.writeFile.restore();
    });
    describe('a resposta', () => {
      it('é uma string', async () => {
        const response = await writeFile('arquivo.txt', 'Turma 12 a mais braba!');

        expect(response).to.be.a('string');
      });
      it('é a mensagem "ok"', async () => {
        const response = await writeFile('arquivo.txt', 'Turma 12 a mais braba!');

        expect(response).to.be.eq('ok');
      });
    });
  });
});
