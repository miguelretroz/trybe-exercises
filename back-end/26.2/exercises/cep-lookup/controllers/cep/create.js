const rescue = require('express-rescue');
const cepService = require('../../services/cep');

module.exports = rescue(
  async (req, res, next) => {
    const { cep, logradouro, bairro, localidade, uf } = req.body;

    const newCep = await cepService.create(
      {
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
      },
    );

    if (newCep.error) return next(newCep.error);

    res.status(newCep.code).json(newCep.cep);
  },
);
