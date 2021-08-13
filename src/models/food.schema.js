'use strict';

const food = (sequelize, DataTypes) => sequelize.define('food', {
  nameFood: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  drink:{
    type: DataTypes.STRING,
  }
});

module.exports = food;