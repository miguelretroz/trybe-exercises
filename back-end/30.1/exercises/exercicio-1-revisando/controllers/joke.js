const JokeModels = require('../models/joke');

const listJokes = async (_req, res) => {
  const joke = await JokeModels.getJoke();

  return res.render('jokeView.ejs', { joke });
};

module.exports = {
  listJokes,
};