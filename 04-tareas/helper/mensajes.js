const { promises } = require('dns');
const { resolve } = require('path');

require('colors');

const Menu = () => {

    return new Promise((resolve) => {
        
        console.clear();
        console.log("=======================".blue);
        console.log(" Selecione una opcion ".blue);
        console.log("=======================\n".blue);
    
        console.log(`${'1'.green}. Crear una tarea`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Tareas completadas`);
        console.log(`${'4'.green}. Completar tarea(s)`);
        console.log(`${'5'.green}. Borrar tarea`);
        console.log(`${'0'.green}. Salir\n`);
    
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question('Seleccione una opcion: ' , (opt) => {
            readline.close();
            resolve(opt);
        })
    });

}

const Pausa = () => {

    return new Promise((resolve) => {
        
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\n presione ${'Enter'.blue} para continuar`, (opt) => {
            readline.close();
            resolve();
        })
    });
}

module.exports = {
    Menu ,   
    Pausa
}