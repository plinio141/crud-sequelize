'use strict';

const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('BD', 'USER', 'PASSWORD', {
    dialect: 'mysql',
    host: 'HOST',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

class Person extends Model {
}

class Hobbie extends Model {
}


module.exports = {
    Person, Hobbie
};