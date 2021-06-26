require("colors");
const { inquirerMenus } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenus();

    console.log({ opt });
  } while (opt !== "0");
};

main();
