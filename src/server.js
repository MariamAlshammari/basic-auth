'use strict';

const express=require('express');
const app=express();

const authRouts=require('./auth/routes')

const notFoundHandler=require('./error-handler/404');
const serverErrorHandler=require('./error-handler/500');




app.use(express.json());
app.use(authRouts)
app.use(express.urlencoded({ extended: true }));

// localhost:3000/
app.get('/',(req,res)=>{
    res.status(200).send('Helloo World!, all working')
});



app.get('/bad', (req, res, next) => {
    next('error from bad end point');
}); 



app.use('*', notFoundHandler);
app.use(serverErrorHandler);




module.exports={
    server:app,
    start:port=>{
        app.listen(port,()=>console.log(`Server listening on ${process.env.PORT}`))
    }
}