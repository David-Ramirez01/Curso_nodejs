import { Tarea } from "./Tarea.js";

export class Tareas {
    _lista = {};

    constructor(){
        this._lista = {};
    }

    Cargar_Tareas( tareas = []){
        tareas.forEach( tr => {
            this._lista[tr.id ] = tr;
        })
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

    Lista_Tareas(){
        console.log();
        this.listado.forEach( (tar,i) => {
            const idx = `${i+1}`.green;
            const { descripcion , completado } = tar;
            const estatus = (completado)?'completado'.green:'pendiente'.red;
            console.log(`${idx}. ${descripcion} :: ${estatus}`);
        })
    }

    TareasComletas(){
        this.listado.forEach((tar,i) => {
            const idx = `${i+1}`.green;
            const  { descripcion , completado } = tar;
            if(completado !== null){
                console.log(`${idx}. ${descripcion} :: ${`Completado`.green}`);
            }
        })
    }

    TareasPendiente(){
        this.listado.forEach((tar,i) => {
            const idx = `${i+1}`.green;
            const  { descripcion , completado } = tar;
            if(completado == null){
                console.log(`${idx}. ${descripcion} :: ${`Pendiente`.red}`);
            }
        })
    }
}
