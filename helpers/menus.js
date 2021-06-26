const mostraMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("====================".green);
    console.log("  Menu de la app".green);
    console.log("====================".green);

    console.log(`${'1.'.green} Crear tareas`.red);
    console.log(`${'2.'.green} Listar tareas`);
    console.log(`${'3.'.green} Listar tareas completadas`);
    console.log(`${'4.'.green} Listar tareas pendientes`);
    console.log(`${'5.'.green} Completar tareas`);
    console.log(`${'6.'.green} Borrar tarea`);
    console.log(`${'0.'.green} Salir \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Seleccione una opción: `, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausar = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`Presione ENTER para continuar `, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  mostraMenu,
  pausar,
};
