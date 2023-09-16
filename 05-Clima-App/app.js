import t from "./helpers/inquirerCustom"


const main = async () =>{
    const text = await t.LeerInput('hola: ');

    console.log(text);
}

main();