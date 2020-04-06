const config = require("config");
const Sequelize = require('sequelize');

const {dbUser, dbPW, dbName, server} = config.get('database');


const sequelize = new Sequelize(dbName, dbUser, dbPW, {
        host: server,
        dialect: 'postgres'
});
          

module.exports = sequelize;