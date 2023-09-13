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
            const idx = `${i+1}`;
            const { descripcion , completado } = tar;
            const estatus = (completado)?'completado'.green:'pendiente'.red;
            console.log(`${`${idx+`.`}`.green} ${descripcion} :: ${estatus}`);
        })
    }

    TareasComletas(){
        this.listado.forEach(tar => {
            let cont = 0;
            const  { descripcion , completado } = tar;
            if(completado !== null){
                cont +=1;
                console.log(`${`${cont+`.`}`.green} ${descripcion} :: ${`Completado`.green}`);
            }
        })
    }

    TareasPendiente(){
        let cont = 0;
        this.listado.forEach(tar => {
            const  { descripcion , completado } = tar;
            if(completado == null){
                cont += 1;
                console.log(`${`${cont+`.`}`.green} ${descripcion} :: ${`Pendiente`.red}`);
            }
        })
    }

    BorrarTarea(id = ''){
        if(this._lista[id]){
            delete this._lista[id];
        }
    }
}
