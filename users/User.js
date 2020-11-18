const Sequelize = require('sequelize');
const connection = require('../database/databse');

const User = connection.define('users', {
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//User.sync({force: true}); //Só deixa na primeira vez que rodar o projeto
//force: true faz com que a tabela seja criada toda vez que o projeto for rodado

module.exports = User;