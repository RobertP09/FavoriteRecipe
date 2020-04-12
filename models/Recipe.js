const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const Recipe = sequelize.define("recipe", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  timeToCook: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ovenTemp: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  ingredients: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  instructions: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Recipe;
