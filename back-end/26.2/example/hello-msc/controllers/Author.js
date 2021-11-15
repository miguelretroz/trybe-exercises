const rescue = require('express-rescue');
const service = require('../services/Author');

const getAll = rescue(async (_req, res) => {
  const authors = await service.getAll();

  res.status(200).json(authors);
});

const findById = rescue(async (req, res, next) => {
  const { id } = req.params;

  const author = await service.findById(id);

  if (author.error) return next(author.error);

  res.status(200).json(author);
});

module.exports = {
  getAll,
  findById,
};