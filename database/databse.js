const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'admin', 'admin', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = connection;