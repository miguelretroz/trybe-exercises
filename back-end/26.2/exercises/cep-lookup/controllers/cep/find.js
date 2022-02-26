const rescue = require('express-rescue');

const cepService = require('../../services/cep');

module.exports = rescue(
  async (req, res, next) => {
    const { cep } = req.params;

    const cepResult = await cepService.find(cep);

    if (cepResult.error) return next(cepResult.error);

    res.status(cepResult.code).json(cepResult.cep);
  },
);
