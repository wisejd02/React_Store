'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Product: {
        type: Sequelize.STRING
      },
      ProductDescr: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.FLOAT
      },
      Options_A: {
        type: Sequelize.STRING
      },
      Options_B: {
        type: Sequelize.STRING
      },
      Inventory: {
        type: Sequelize.INTEGER
      },
      Category: {
        type: Sequelize.STRING
      },
      Image: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};