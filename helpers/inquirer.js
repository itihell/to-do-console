const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "que desea hacer..?",
    choices: [
      {
        value: "1",
        name: `${"1.".green} Crear tareas`,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tareas`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tareas`,
      },
      {
        value: "6",
        name: `${"6.".green} Borra tareas`,
      },
      {
        value: "0",
        name: `${"0.".green} Salir`,
      },
    ],
  },
];

const inquirerMenus = async () => {
  console.clear();
  console.log("====================".green);
  console.log("  Menu de la app".green);
  console.log("====================".green);

  const { opcion } = await inquirer.prompt(preguntas);

  return opcion;
};

const pause = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${"enter".green} para continuar`,
    },
  ];

  console.log("\n");

  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenus,
  pause,
};
