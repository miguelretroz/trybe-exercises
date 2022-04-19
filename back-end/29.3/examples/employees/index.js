const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const { Address, Employee } = require('./models');
const config = require('./config/config');

const app = express();
app.use(bodyParser.json());

console.log(process.env.NODE_ENV);
const sequelize = new Sequelize(config[process.env.NODE_ENV || 'development']);

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
      where: { id },
      include: [{ model: Address, as: 'addresses' }],
    });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });

    // if (req.query.includeAddresses === 'true') {
    //   const addresses = await Address.findAll({ where: { employeeId: id } });
    //   return res.status(200).json({ employee, addresses });
    // }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

app.post('/employees', async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    // const result = await sequelize.transaction(async (transaction) => {
    //   const employee = await Employee.create(
    //     { firstName, lastName, age },
    //     { transaction },
    //   );

    //   await Address.create(
    //     { city, street, number, employeeId: employee.id },
    //     { transaction },
    //   );
    // });

    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction },
    );

    await transaction.commit();

    return res.status(201).json({
      id: employee.id,
      message: 'Cadastrado com sucesso'
    });
  } catch (e) {
    await transaction.rollback();

    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;