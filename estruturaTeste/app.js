const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rotas importadas
const rotas = require('./routes');


app.use(rotas);

module.exports = app