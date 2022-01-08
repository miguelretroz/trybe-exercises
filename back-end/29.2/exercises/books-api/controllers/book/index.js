const { bookServices } = require('../../services');

const getAll = async (req, res) => {
  const books = await bookServices.getAll();

  res.status(200).json({ books });
};

module.exports = {
  getAll,
};
