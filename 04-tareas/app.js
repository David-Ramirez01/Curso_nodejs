var colors = import('colors');
import {InqMenu} from "./helper/inquirer.js";

console.clear();


const Main = async () => {

    let opt = '';
    do{
        opt = await InqMenu();
        console.log({opt})
    }while(opt !== '0');
    
}

Main();