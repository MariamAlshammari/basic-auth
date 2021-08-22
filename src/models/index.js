'use strict';


const DATABASE_URL=process.env.DATABASE_URL || "postgres://postgres@localhost:5432/authdb";

const { Sequelize, DataTypes } = require('sequelize');
let sequelize = new Sequelize(DATABASE_URL,{});

// const food=require('./food.model');
// const clothes=require('./clothes.model');
const usersModel=require('./user.model');





module.exports={
    db:sequelize,
    usersModel:usersModel(sequelize,DataTypes)

}