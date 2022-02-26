const CategoriesModel = require('../models/categories');

const listCategories = async (_req, res) => {
  const categories = await CategoriesModel.getCategories();

  return res.render('./categories', { categories });
};

module.exports = {
  listCategories,
};