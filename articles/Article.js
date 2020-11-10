const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const connection = require('../database/databse');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

module.exports = Article;