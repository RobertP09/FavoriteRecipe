const config = require("config");
const { Sequelize } = require('sequelize');

const {dbUser, dbPW, dbName, server} = config.get('database');

const connectDB = async () => {
    try {
        const sequelize = new Sequelize(dbName, dbUser, dbPW, {
            host: server,
            dialect: 'postgres'
          });
          
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:' , error)
    }
}

module.exports = connectDB;