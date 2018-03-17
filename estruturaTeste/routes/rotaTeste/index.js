const express = require('express');
// var bcrypt = require('bcryptjs');

const testeGet = require('./testeGet');
const testePost = require('./testePost');
const testePut = require('./testePut');
const testeDelete = require('./testeDelete');

const app = express();

app.get('/', async (req, res) => {

});

app.post('/', 'middlewares' ,testePost.grava);

app.put('/:id', (req, res) => {

});

app.delete('/:id', (req, res) => {
  
});


module.exports = app;