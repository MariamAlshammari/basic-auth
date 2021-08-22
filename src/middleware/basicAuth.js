'use strict';
const express = require('express');
const bccrypt = require('bcrypt');
const base64 = require('base-64');
const {usersModel}=require('../models/index')

module.exports = async(req, res, next) => {
    if(req.body){
    next();}
    else{
        next('error invalid');
    }
}