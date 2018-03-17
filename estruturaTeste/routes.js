const express = require('express');

const requireRoutres = require('./requireRoutes');

const app = express();

app.use('/', appRoutes);
app.use('/teste', requireRoutres.rotaTeste);
app.use('/usuario', requireRoutres.users);