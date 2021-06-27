const Tarea = require("./Tarea");

class Tareas {
  _listado = {};

  get listado() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crear(description = "") {
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;
  }

  parsearTareas(data = []) {
    this._listado = data.map((item) => {
      const tarea = [];
      tarea[item.id] = item;
      return tarea;
    });
  }
}

module.exports = Tareas;
