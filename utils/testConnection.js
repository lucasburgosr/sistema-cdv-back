const sequelize = require('./database');

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
    process.exit(0); // Salir con éxito si la conexión es exitosa
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
    process.exit(1); // Salir con error si la conexión falla
  });
