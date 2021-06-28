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
  destroy(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  crear(description = "") {
    const tarea = new Tarea(description);
    this._listado[tarea.id] = tarea;
  }

  parsearTareas(data = []) {
    data.map((item) => {
      this._listado[item.id] = item;
    });
  }

  listarTareas() {
    console.log("\n".green);

    this.listado.map((item, index) => {
      let alerta = "Pendiente".red;
      if (item.completed) {
        alerta = "Completado".green;
      }
      const tarea = `${index + 1}:`.green + ` ${item.description} :: ${alerta}`;
      console.log(tarea);
    });
  }

  listCompletedOrPending(completed = true) {
    console.log("\n".green);
    let contador = 0;
    this.listado.map((item, index) => {
      let alerta = "Pendiente".red;
      if (completed) {
        contador += 1;
        if (item.completed) {
          alerta = `${item.completed}`.green;
          this.formatItem(contador, item, alerta);
        }
      } else {
        contador += 1;
        if (!item.completed) {
          this.formatItem(contador, item, alerta);
        }
      }
    });
  }

  formatItem(index = 0, item = {}, alerta) {
    const tarea = `${index}.`.green + ` ${item.description} :: ${alerta}`;
    console.log(tarea);
  }
}

module.exports = Tareas;
