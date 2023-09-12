import { Tarea } from "./Tarea.js";

export class Tareas {
    _lista = {};

    constructor(){
        this._lista = {};
    }

    get listado(){
        const lista = [];
        Object.keys(this._lista).forEach( key =>{
            const tr = this._lista[key];
            lista.push( tr );
        });
        return lista;   
    }

    Crear_Tarea(desc  = ''){
        const tarea = new Tarea(desc);
        this._lista[tarea.id] = tarea;
    }
}
