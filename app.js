require("colors");
const { inquirerMenus, pause } = require("./helpers/inquirer");
const { Tarea } = require("./models/Tarea");
const { Tareas } = require("./models/Tareas");

console.clear();

const main = async () => {
  let opt = "";

  do {
    const tareas = new Tareas();
    const tarea = new Tarea("Comprar Comida");

    tareas._listado[tarea.id] = tarea;
    console.log(tareas, tarea);
    await pause();
  } while (opt !== "0");
};

main();
