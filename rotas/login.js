const express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const app = express();

const Usuarios = require('../models/usuario');

app.post('/', (req, res) => {

  Usuarios.findOne( { email: req.body.email } , (err, usuario) => {

    if (err) {
      return res.status(500).json({
        ok: false,
        mensage: 'error ao buscar usuário',
        error: err
      });
    }

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        mensage: 'erro de credencial - email'
      });
    }

    if (!bcrypt.compareSync(req.body.password, usuario.password)) {
      return res.status(400).json({
        ok: false,
        mensage: 'erro de credencial - password'
      });
    }

    // criar token - payload = o usuário com os dados que será criptografado em token
    const token = jwt.sign({ usuario: usuario}, '@chave-secreta_do_token', {expiresIn: 14400}); // 4 horas
    // fim criar token

    // necessário para retirar a propriedade 'password' do objeto usuário.
    const usuarioFinal = {
      _id: usuario._id,
      name: usuario.name,
      email: usuario.email,
      role: usuario.role,
    }

    return res.status(200).json({
      ok: false,
      usuario: usuarioFinal,
      token
    });

  });
});


module.exports = app;