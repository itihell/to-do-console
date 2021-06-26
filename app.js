require("colors");
const { inquirerMenus, pause } = require("./helpers/inquirer");

console.clear();

const main = async () => {
  let opt = "";

  do {
    opt = await inquirerMenus();
    console.log({ opt });
    await pause();
  } while (opt !== "0");
};

main();
