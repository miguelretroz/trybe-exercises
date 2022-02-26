const JokeModel = require('../models/joke');

const listByCategory = async (req, res) => {
  const { category } = req.params;

  const joke = await JokeModel.getByCategory(category);

  return res.render('./jokes', { joke });
};

const listRandom = async (_req, res) => {
  const joke = await JokeModel.getRandom();

  return res.render('./jokes', { joke });
};

module.exports = {
  listByCategory,
  listRandom,
};
