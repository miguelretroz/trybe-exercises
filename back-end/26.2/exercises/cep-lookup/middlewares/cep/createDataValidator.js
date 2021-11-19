const cepSchemas = require('../../schemas/cep');

module.exports = (req, _res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const dataChecked = cepSchemas.createDataValidator(
    {
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    },
  );

  if (dataChecked.error) return next(dataChecked.error);

  next();
};
