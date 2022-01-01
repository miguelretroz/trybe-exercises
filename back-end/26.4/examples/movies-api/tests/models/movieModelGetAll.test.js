const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection');


const MoviesModel = require('../../models/movieModel');

describe('Ao chamar o model getAll', () => {
  let connectionMock = null;
  const DB_NAME = 'model_example';
  const COLLECTION_NAME = 'movies';

  before(async () => {
    connectionMock = await getConnection();

    sinon.stub(MongoClient, 'connect').resolves(connectionMock);

    await connectionMock.db(DB_NAME).createCollection(COLLECTION_NAME);
  });

  after(async () => {
    MongoClient.connect.restore();
  });
  describe('quando o DB está vazio', () => {
    it('o retorno é um array', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('o array é retornado vazio', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.empty;
    });
  });

  describe('quando há filmes no DB', () => {
    const moviesToStore = [
      {
        title: 'Darkest Hour',
        directedBy: 'Joe Wright',
        releaseYear: 2018,
      },
      {
        title: 'The Dark Knight',
        directedBy: 'Christopher Nolan',
        releaseYear: 2008,
      },
    ];

    before(async () => {
      const db = connectionMock.db('model_example');

      await db.collection('movies').insertMany(moviesToStore);
    });

    it('o retorno é um array', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.be.an('array');
    });

    it('retorna todos os filmes do DB', async () => {
      const movies = await MoviesModel.getAll();

      expect(movies).to.have.deep.members(moviesToStore);
    });
  });
});
