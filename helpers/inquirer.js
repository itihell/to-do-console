const inquirer = require("inquirer");
require("colors");

const preguntas = [
  {
    type: "list",
    name: "options",
    message: "que desea hacer..?",
    choices: ["opt1", "opt2", "opt3"],
  },
];

const inquirerMenus = async () => {
  console.clear();
  console.log("====================".green);
  console.log("  Menu de la app".green);
  console.log("====================".green);

  const options = inquirer.prompt(preguntas);

  return options;
};

module.exports = {
  inquirerMenus,
};
