'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('vehicles', {
      vehicle_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      owner_id: {
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.DATE
      },
      type: {
        type: Sequelize.STRING
      },
      number_plate: {
        type: Sequelize.STRING
      },
      price_per_day: {
        type: Sequelize.BIGINT
      },
      image: {
        type: Sequelize.BLOB
      },
      documents: {
        type: Sequelize.BLOB
      },
      price: {
        type: Sequelize.BIGINT
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
    return queryInterface.dropTable('vehicles');
  }
};