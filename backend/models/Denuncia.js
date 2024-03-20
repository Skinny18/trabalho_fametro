const  Sequelize = require("sequelize");
const db = require('../db');

const Denuncias = db.define('denuncias', {
  name: {
    type: Sequelize.STRING,
  },
  options: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  }
  
});

module.exports = Denuncias;

