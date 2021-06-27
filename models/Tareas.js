const Tarea = require("./Tarea");

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  crear(description = "") {
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
