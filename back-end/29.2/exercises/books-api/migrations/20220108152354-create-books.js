'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Books',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        author: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        pageQuantity: {
          allowNull: true,
          type: Sequelize.INTEGER,
          field: 'page_quantity',
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at'
        },
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};
