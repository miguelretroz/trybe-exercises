'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Users',
      'phone_num',
      Sequelize.STRING,
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'phone_num');
  },
};
