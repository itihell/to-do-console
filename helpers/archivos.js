const fs = require("fs");
const archivo = "./db/data.json";
const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }

  const texto = fs.readFileSync(archivo, { encoding: "utf-8" });
  const data = JSON.parse(texto);

  //console.log(data);

  return data;
};

module.exports = {
  guardarDB,
  leerDB,
};
