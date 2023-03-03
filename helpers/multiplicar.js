const fs = require('fs'); //? 👈 aqui requerimos el modulo fs que es file system que nos permitira escribir archivos en el sistema

//? Solicitamos los colores
const colors = require('colors')

const crearArchivo = async (base = 5, listar = false, hasta=10) => {
  //* Creamos nuestra funcion asincrona
  try {
    //!SOLUCION AL PROBLEMA DE COLORS

    let salida = '';
    let consola= ''
    for (let i = 1; i <=hasta; i++) {
      salida += `${base} x ${[i]} = ${base * [i]}\n`;
      consola += `${base} x ${[i]} = ${base * [i]}\n`.rainbow;
    }
    if (listar ) {
      const tabla = console.log('===================='.rainbow);
      console.log(`====Tabla del ${base}=====`.bgWhite);
      console.log('===================='.rainbow);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida); //* esta es la funcion que llevara acabo la creacion del archivo .txt 

    return `Tabla-${base}.txt, creado`.rainbow.italic;
  } catch (error) { 
    return error;
  }
};

module.exports = {
  crearArchivo,
};
