import { v4 } from "uuid";

export class Tarea {
  id = "";
  descripcion = "";
  completado = null;

  constructor(descripcion) {
    this.id = v4();
    this.descripcion = descripcion;
    this.completado = null;
  }
}

