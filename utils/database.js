/* const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sistemacdv', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306'
});

module.exports = sequelize; */

const { Sequelize } = require('sequelize');

// URL de conexión proporcionada por Railway
const sequelize = new Sequelize('postgresql://postgres:MAlJISjpZwiYpvKHixyamKRAdwAGqXJk@junction.proxy.rlwy.net:46254/railway', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;

