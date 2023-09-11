var colors = import("colors");
import { InqMenu, Pausa ,LeerInput } from "./helper/inquirer.js";
import { Tareas } from "./models/Tareas.js";

const Main = async () => { 
  let opt = "";
  const tareas = new Tareas();
  do {
    opt = await InqMenu();
    switch (opt) {
      case "1":
        const dec = await LeerInput('Tarea por hacer: ');
        tareas.Crear_Tarea(dec);
        break;
      case "2":
        console.log(tareas._lista);
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case '6':
        break;
    }

    await Pausa();
  } while (opt !== "0");
};

Main();
