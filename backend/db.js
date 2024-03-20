const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "project_db",
  "user",
  "password",
  {
    host: "172.12.0.5",
    port: 3306,
    dialect: "mysql",
  
    pool: {
      max: 15,
      min: 5,
      idle: 20000,
      evict: 15000,
      acquire: 30000
    },
  }
);


module.exports = sequelize;
