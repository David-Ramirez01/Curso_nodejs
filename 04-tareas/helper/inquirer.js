var colors = import('colors');
import inquirer from 'inquirer';

const MenuOPT = [
    {
        type:'list',
        name:'Option',
        message: 'Que dezea realizar',
        choices: ['opt1','opt2','opt3']
    }
];

export const InqMenu = async () =>{
    console.clear();

    console.log(" =======================".green);
    console.log("  Selecione una opcion ".green);
    console.log(" =======================\n".green);
    const opt = await inquirer.prompt(MenuOPT);
    return opt;
}
