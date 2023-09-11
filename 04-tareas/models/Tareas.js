import { Tarea } from "./Tarea.js";

export class Tareas {
    _lista = {};

    constructor(){
        this._lista = {};
    }

    Crear_Tarea(desc  = ''){
        const tarea = new Tarea(desc);
        this._lista[tarea.id] = tarea;
    }
}
