'use strict';

const supertest = require('supertest');
const {server} = require('../src/server');
const request = supertest(server);
const base64= require('base-64')

describe('Testing Auth', () =>{
    // it('Should Create a new user ', async () => {

        
    //   const response = await request.post('/signup').send({ username: 'ahmad', password: 'ahmad' });
    //   expect(response.status).toEqual(201);
   
    //   expect(response.body.username).toEqual('ahmad')
    // });
    it('Sign in with user created', async () => {
        
        let response = await request.post('/signin').auth('ahmad', 'ahmad');;
        expect(response.status).toEqual(200);
        expect(response.body.username).toEqual('ahmad');
    });
});
