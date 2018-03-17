function save(obj) {
  return new Promise((resolve, reject) => {
    const usuarioSchema = new usuario({
      nome: obj.nome,
      idade: obj.idade,
      sexo: obj.sexo
    });

    usuarioSchema.save((err, newUsuario) => {
      if (err) {
        reject(err);
      }
      resolve(newUsuario);
    });
  });
}

function save(obj) {
  const usuarioSchema = new usuario({
    nome: obj.nome,
    idade: obj.idade,
    sexo: obj.sexo
  });

  try {
    const usuarioSchema = await usuarioSchema.save();
  } catch (error) {
    throw error;
  }
}



async function controller() {
  const meu = {
    nome: 'thi',
    idade: 20,
    sexo: 'M'
  }

  try {
    const newUsuario = await save(meu);

    console.log(newUsuario);
  } catch (error) {
    console.log(error);        
  }
}