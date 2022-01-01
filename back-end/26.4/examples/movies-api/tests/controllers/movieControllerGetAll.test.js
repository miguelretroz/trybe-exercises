const sinon = require('sinon');
const { expect } = require('chai');

const MoviesController = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');

describe('Ao chamar o controller getAll', () => {
  const request = {};
  const response = {};

  response.status = sinon.stub()
    .returns(response);
  response.json = sinon.stub()
    .returns();

    const movies = [
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
    sinon.stub(MoviesService, 'getAll').resolves(movies);

    await MoviesController.getAll(request, response);
  });

  after(() => {
    MoviesService.getAll.restore();
  });

  it('retorna o status 200', async () => {
    expect(response.status.calledWith(200)).to.be.true;
  });

  it('retorna o array de filmes', async () => {
    expect(response.json.calledWith({ movies })).to.be.true;
  });
});
