import 'dotenv/config'
import {LeerInput, IMenu, Pausa} from "./helpers/inquirerCustom.js"
import { Busquedas } from "./models/Busqueda.js";


const main = async () =>{
    const Buscar = new Busquedas();
    let opt = '';
    do{
        opt = await IMenu();
        switch (opt) {
            case '1':
                const lugar =await LeerInput('Ciudad: ');
                
                await Buscar.ciudad(lugar);





                    console.log('\nInformacion de la Ciudad\n'.green);
                    console.log('Ciudad: ');
                    console.log('Lat: ');
                    console.log('Long: ');
                    console.log('Temperatura: ');
                    console.log('Minima ');
                    console.log('Maxima ');
                    break;
            case 2:
                
                break;
        }
        if (opt !== '0') await Pausa();
    }while (opt !== "0");
}

main();