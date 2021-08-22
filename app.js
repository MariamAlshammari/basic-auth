// 'use strict';
// const express = require('express');
// const bccrypt = require('bcrypt');
// const base64 = require('base-64');
// const { Sequelize, DataTypes } = require('sequelize');

// const app = express(); 
// app.use(express.json());

// const sequelize = new Sequelize(process.env.DATABASE_URL||"postgres://postgres@localhost:5432/authdb");

// app.use(express.urlencoded({ extended: true }));

// const Users = sequelize.define('User', {
//     username: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     }
//   });


//   app.post('/signup', async (req, res) => {

//     //  let hashPass= await bccrypt.hash(password,10);
//     //  const record=await Users.create({username, password: hashPass});
//     //  res.status(201).json(record);

//     let authHeader=req.headers.authorization;
//     console.log(authHeader);
//     let encodedCred=authHeader.split(' ').pop();
//     let decodedCred=base64.decode(encodedCred);
//     console.log(decodedCred);
//      [req.body.username, req.body.password]=decodedCred.split(':');

//     try {
        

//       req.body.password = await bccrypt.hash(req.body.password, 10);
//       const record = await Users.create(req.body);
//       console.log('hii',record);
//       res.status(201).json(record);
//     } catch (e) { res.status(403).send("Error Creating User"); }
//   });


//   app.post('/signin', async (req, res) => {

//       let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
//       let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
//       let decodedString = base64.decode(encodedString); // "username:password"
//       let [username, password] = decodedString.split(':'); // username, password
//       try {
//           const user = await Users.findOne({ where: { username } });
//           const valid = await bccrypt.compare(password, user.password);
//           if (valid) {
//             res.status(200).json(user);
//           }
//           else {
//             throw new Error('Invalid User')
//           }
//         } catch (error) { res.status(403).send("Invalid Login"); }
      
//       });

//       // let authHeader = req.headers.authorization;
//     // ['Basic username:password']
//     // console.log(authHeader);

//     // let encodedCreditentials = authHeader.split(' ')[1];
//     // let encodedCreditentials = authHeader.split(' ').pop();

//     // let decodedCreditentials = base64.decode(encodedCreditentials);
//     // username:password
//     // console.log(decodedCreditentials);

//     // let [username, password] = decodedCreditentials.split(':');

//     // get the user from the database
//     // const user = await Users.findOne({ where: { username } });
//     // compare the password, to make sure that the user is the one that is trying to sign in
//     // const isValid = await bccrypt.compare(password, user.password);
//     // console.log('dddssd',typeof password,typeof user.password);

//     // if (isValid) {// success
//     //     res.status(200).json(user);
//     // } else {// unauthenticated
//     //     res.status(401).json({ error: 'Invalid credentials' });
//     // }

    

  

//   sequelize.sync()
//   .then(() => {
//     app.listen(3000, () => console.log('server up'));
//   }).catch(e => {
//     console.error('Could not start server', e.message);
//   });
