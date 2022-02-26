const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('Ao chamar o service getAll', () => {
  describe('quando não há nenhum filme no banco de dados', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const movies = await MoviesService.getAll();

      expect(movies).to.be.an('array');
    });
    it('o array está vazio', async () => {
      const movies = await MoviesService.getAll();

      expect(movies).to.be.an('array').that.is.empty;
    });
  });

  describe('quando há filmes no banco de dados', () => {
    const movie = {
      _id: "61d1fe23985a2823e58521af",
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'getAll')
        .resolves([movie]);
    });

    after(() => {
      MoviesModel.getAll.restore();
    });

    it('retorna um array', async () => {
      const movies = await MoviesService.getAll();

      expect(movies).to.be.an('array');
    });

    it('o array contém itens do tipo objeto', async () => {
      const movies = await MoviesService.getAll();

      const [movieOne] = movies;

      expect(movieOne).to.be.an('object');
    });

    it('o array tem os filmes esperados', async () => {
      const movies = await MoviesService.getAll();

      expect(movies).to.have.deep.members([movie]);
    });
  });
});