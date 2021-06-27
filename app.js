require("colors");
const { inquirerMenus, pause, leer } = require("./helpers/inquirer");

const Tareas = require("./models/Tareas");

console.clear();

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await inquirerMenus();

    switch (opt) {
      case "1":
        const description = await leer("Descripción: ");
        tareas.crear(description);
        break;
      case "2":
        console.log(tareas.listado);
        break;

      default:
        break;
    }

    await pause();
  } while (opt !== "0");
};

main();
