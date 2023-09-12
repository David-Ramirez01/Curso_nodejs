import fs from "fs"

export const Guardartext = ( data ) => {
    
    const ruta =`../db/datos.json`

    fs.writeFile(ruta , JSON.stringify(data));
}