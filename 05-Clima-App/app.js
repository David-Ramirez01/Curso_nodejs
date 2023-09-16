import {LeerInput} from "./helpers/inquirerCustom.js"


const main = async () =>{
    const text = await LeerInput('hola: ');
    console.log(text);
}

main();