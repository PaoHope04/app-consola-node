//* Ahora echo con Yargs
const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe:'numero base para tabla de multiplicar'
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar en consola'
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Limite para la tabla de multiplicar'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw new Error('La base tiene que ser un numero');
    }
    return true;
  }).argv; //? 👈 Solicitamos a yargs y los argumentos de la consola


module.exports = argv; //* Exportamos argv para mejor funcionamiento.