const express = require('express');
const statusCode = require('http-status-codes').StatusCodes;

const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.status(statusCode.OK).json(products);
});

router.get('/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(statusCode.NOT_FOUND).end();

  res.status(statusCode.OK).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.status(statusCode.CREATED).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const product = await ProductModel.exclude(req.params.id);

  if (Object.keys(product).length === 0) return res.status(statusCode.NOT_FOUND).end();

  res.status(statusCode.NO_CONTENT).end();
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;

  const product = await ProductModel.update(id, name, brand);

  res.status(statusCode.OK).json(product);
});

module.exports = router;
