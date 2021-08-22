'use strict';
const express = require('express');
const bccrypt = require('bcrypt');
const base64 = require('base-64');
const basicAuth=require('../middleware/basicAuth');
const router = express.Router();
const {usersModel}=require('../models/index')
router.post('/signup', async (req, res) => {


    let authHeader=req.headers.authorization;
    console.log(authHeader);
    let encodedCred=authHeader.split(' ').pop();
    let decodedCred=base64.decode(encodedCred);
    console.log(decodedCred);
     [req.body.username, req.body.password]=decodedCred.split(':');

    try {
        

      req.body.password = await bccrypt.hash(req.body.password, 10);
      const record = await usersModel.create(req.body);
      console.log('hii',record);
      res.status(201).json(record);
    } catch (e) { res.status(403).send("Error Creating User"); }
  });

  router.post('/signin',basicAuth, async (req, res) => {

    let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(':'); // username, password
    try {
        const user = await usersModel.findOne({ where: { username } });
        const valid = await bccrypt.compare(password, user.password);
        if (valid) {
          res.status(200).json(user);
        }
        else {
          throw new Error('Invalid User')
        }
      } catch (error) { res.status(403).send("Invalid Login"); }
    
    });

    module.exports = router;