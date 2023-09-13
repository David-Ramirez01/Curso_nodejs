var colors = import("colors");
import { Guardartext, LeerArchivo } from "./helper/guardar.js";
import { InqMenu, Pausa ,LeerInput } from "./helper/inquirer.js";
import { Tareas } from "./models/Tareas.js";

const Main = async () => { 
  let opt = "";
  const tareas = new Tareas();
  const tareasdb = LeerArchivo();
  if (tareasdb ) {
    tareas.Cargar_Tareas(tareasdb);
  }
  do {
    opt = await InqMenu();
    switch (opt) {
      case "1":
        const dec = await LeerInput('Tarea por hacer: ');
        tareas.Crear_Tarea(dec);
        break;
      case "2":
        tareas.Lista_Tareas();
        break;
      case "3":
        tareas.TareasComletas();
        break;
      case "4":
        tareas.TareasPendiente();
        break;
      case "5":
        break;
      case '6':
        break;
    }

    Guardartext(tareas.listado);    

    await Pausa();
  } while (opt !== "0");
};

Main();
