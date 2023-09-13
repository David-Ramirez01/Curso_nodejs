import fs from "fs"
const ruta =`./db/datos.json`

export const Guardartext = ( data ) => {
    fs.writeFileSync(ruta , JSON.stringify(data));
}

export const LeerArchivo = () => {
    if(!fs.existsSync(ruta)){
        return null
    }

    const info = fs.readFileSync(ruta, { encoding: 'utf-8'});
    const data = JSON.parse(info);
    return data;
}