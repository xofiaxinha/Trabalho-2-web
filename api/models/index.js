const { Sequelize } = require('sequelize');
const config = require('../config/config');

const db = new Sequelize(config.development.postgres.options);

const Expense = require('./expense')(db, Sequelize);
db.sync();

module.exports ={
    db,
    Expense,
};