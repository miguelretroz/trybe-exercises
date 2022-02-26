const rescue = require('express-rescue');
const Joi = require('joi');

const service = require('../services/Author');

const create = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    firstName: Joi.string().not().empty().required(),
    middleName: Joi.string().not().empty(),
    lastName: Joi.string().not().empty().required(),
  })
    .validate(req.body);

  if (error) return next(error);

  const { firstName, middleName, lastName } = req.body;

  const newAuthor = await service.create(firstName, middleName, lastName);

  if (newAuthor.error) return next(newAuthor.error);

  return res.status(201).json(newAuthor);
});

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
  create,
  getAll,
  findById,
};