const Sequelize = require('sequelize');

//Connection object
const sequelize = new Sequelize('nodejstutorials', 'dev3', 'ClientPass3@23', {
    host: 'localhost',
    dialect: 'postgres',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  module.exports.sequelize = sequelize
