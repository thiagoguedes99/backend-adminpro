const express = require('express');
const mongoose = require('mongoose');

const app = express();

// mongoose.Promise = global.Promise;
// mongoose.set('debug', true);

// mongoose.connect(.........)
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
  if (err) throw err;

  console.log('mongodb: \x1b[32m%s\x1b[0m','conectado');
});

app.get('/', (req, res) => {
  res.status(200).json(
    {
      ok: true,
      mensage: 'pedido realizado'
    }
  );
});

app.listen(3000, () => {
  console.log('Express server rodando port 3000: \x1b[32m%s\x1b[0m','online') 
  // \x1b[32m - deixa as letras em verde.
  // %s - é a variável 'online'.
  // \x1b[0m - faz o resert de cores para o padrão (branco).
});