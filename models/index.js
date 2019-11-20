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
Person.init({
    id:{
        field: 'id_person',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    firstName: { type: Sequelize.STRING, field: 'first_name' },
    lastName: { type: Sequelize.STRING, field: 'last_name' },
    age: Sequelize.INTEGER,
    }, {
        sequelize,
        modelName: 'person',
        tableName: 'tbl_people',
        timestamps: false,
        createdAt: false,
    }
);

class Hobbie extends Model {
}

Hobbie.init({
    id:{
        field: 'id_hobbie',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
    },
    name: Sequelize.STRING,
    person: {
        type: Sequelize.INTEGER,
        field: 'person_id_person',
        references: {
            model: Person,
            key: 'id_person'
        }
    }
}, { sequelize, modelName: 'hobbie',  tableName: 'tbl_hobbies', timestamps: false, createdAt: false });

Person.hasMany(Hobbie);

module.exports = {
    Person, Hobbie
};