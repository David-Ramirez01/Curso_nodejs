import 'dotenv/config'
import {LeerInput, IMenu, Pausa ,ListaLugares } from "./helpers/inquirerCustom.js"
import { Busquedas } from "./models/Busqueda.js";


const main = async () =>{
    const Buscar = new Busquedas();
    let opt = '';
    do{
        opt = await IMenu();
        switch (opt) {
            case '1':
                const lugar =await LeerInput('Ciudad: ');
                const lugares = await Buscar.ciudad(lugar);
                const selecid = await ListaLugares(lugares);
                const LugarSel = lugares.find( l => l.id = selecid);
                const ClimaLu = await Buscar.CLima( LugarSel.lat , LugarSel.lng);
                console.log('\nInformacion de la Ciudad\n'.green);
                console.log('Ciudad: ',LugarSel.nombre);
                console.log('Lat: ',LugarSel.lat);
                console.log('Long: ',LugarSel.lng);
                console.log('Temperatura: ',ClimaLu.temp);
                console.log('Minima ',ClimaLu.min);
                console.log('Maxima ',ClimaLu.max);
                console.log('Como esta el clima: ',ClimaLu.desc)
                break;
            case 2:
                
                break;
        }
        if (opt !== '0') await Pausa();
    }while (opt !== "0");
}

main();