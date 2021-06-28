require("colors");
const inquirer = require("inquirer");
const { guardarDB, leerDB } = require("./helpers/archivos");
const {
  inquirerMenus,
  pause,
  leer,
  listarTareasABorrar,
} = require("./helpers/inquirer");

const Tareas = require("./models/Tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  const tareasDB = leerDB();

  if (tareasDB) {
    tareas.parsearTareas(tareasDB);
  }

  do {
    opt = await inquirerMenus();

    switch (opt) {
      case "1":
        const description = await leer("Descripción: ");
        tareas.crear(description);
        break;
      case "2":
        tareas.listarTareas();
        break;
      case "3":
        tareas.listCompletedOrPending(true);
        break;
      case "4":
        tareas.listCompletedOrPending(false);
        break;
      case "6":
        const tarea = await listarTareasABorrar(tareas.listado);
        tareas.destroy(tarea);
        break;

      default:
        break;
    }

    guardarDB(tareas.listado);

    await pause();
  } while (opt !== "0");
};

main();
