'use strict';

require('dotenv').config();
const POSTGRES_URI = process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/lab04';
const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./lip/collection');
const customerSchema = require('./customer.schema');
const foodSchema = require('./food.schema');

let sequelize = new Sequelize(POSTGRES_URI);

const customerModel = customerSchema(sequelize, DataTypes);
const foodModel = foodSchema(sequelize, DataTypes);

customerModel.hasMany(foodModel, { foreignKey: 'customerId', sourceKey: 'id'});
foodModel.belongsTo(customerModel, { foreignKey: 'customerId', targetKey: 'id'});


//export Collections 
const customerCollection = new Collection(customerModel);
const foodCollection = new Collection(foodModel);


module.exports = {
  db: sequelize,
  customerCollection: customerCollection,
  foodCollection: foodCollection
}