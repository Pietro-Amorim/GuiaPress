const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING, 
        allowNull: false // não pode ser nulo
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false // não pode ser nulo
    }
});

module.exports = Category; // exporta a categoria