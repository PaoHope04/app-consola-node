//* Requerir paquetes (require)
const { crearArchivo } = require('./helpers/multiplicar'); //? 👈 aqui hacemos el requerimiento de nuestro modulo donde tenemos el proceso de la tabla de multiplicar

//*importar Yargs

const argv= require('./config/yargs') //* exportamos la funcion argv para que no ocupe mucho codigo

console.clear();

/* const [, , arg3='base=5'] = process.argv //? 👈 De aqui llegan los argumentos de la consola

const [, base=4 ] = arg3.split('=')//? 👈 Aqui tomamos la base le ponemos un valor  */



// let numero = 4;

crearArchivo(argv.b, argv.l,argv.h)
  .then((archivo) => console.log(archivo))
  .catch((err) => console.log(err));


