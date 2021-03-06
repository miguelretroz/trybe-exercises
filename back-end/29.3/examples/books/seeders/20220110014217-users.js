'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Bárbara',
          last_name: 'Silva',
          age: 16,
        },
        {
          first_name: 'Carlos',
          last_name: 'Santos',
          age: 24,
        },
        {
          first_name: 'Danilo',
          last_name: 'Henrique',
          age: 32,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
