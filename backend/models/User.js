const  Sequelize = require("sequelize");
const db = require('../db');

const User = db.define('users', {
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
  },
  updatedAt: {
    type: Sequelize.DATE,
  }

  
});

module.exports = User;

