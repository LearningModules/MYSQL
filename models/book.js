const Sequelize = require('sequelize');

//Connection object
const sequelize = new Sequelize('nodejstutorials', 'dev3', 'ClientPass3@23', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

//var sequelize = new Sequelize("postgres://dev3:dev3@localhost:5432/nodejstutorials");


  var Book = sequelize.define('T_BOOK',{
    id: { type : Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    name : Sequelize.STRING,
    author: Sequelize.STRING,
    series_t: Sequelize.STRING,
    sequence_i: Sequelize.BIGINT,
    genre_s: Sequelize.STRING,
    inStock: Sequelize.BOOLEAN,
    price: Sequelize.FLOAT,
    pages_i: Sequelize.INTEGER
  }); 

  //sequelize.sync();
  module.exports.sequelize = sequelize
  module.exports.Book = Book
