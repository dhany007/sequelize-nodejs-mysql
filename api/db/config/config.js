require('dotenv').config();

const {
  DB_HOST,
  DB_USER,
  DB_PW,
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PW,
    database: 'northwind',
    host: DB_HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
