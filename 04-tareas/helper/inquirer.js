var colors = import('colors');
import inquirer from 'inquirer';


const MenuOPT = [
    {
        type:'list',
        name:'Option',
        message: 'Que dezea realizar',
        choices: [{
            value: '1',
            name:`1. Crear tarea`
        },
        {
            value: '2',
            name:`2. Lista de tarea`
        },
        {
            value: '3',
            name:`3. Tareas completadas`
        },
        {
            value: '4',
            name:`4. Tareas Pendientes`
        },
        {
            value: '5',
            name:`5. Completar tares(s)`
        },
        {
            value: '6',
            name:`6. Borrar tarea(s)`
        },
        {
            value: '0',
            name:`0. Salir`
        }
    ]
    }
];

export const InqMenu = async () =>{
    console.clear();
    
    console.log('======================='.white);
    console.log(' Selecione una opcion '.white);
    console.log('=======================\n'.white);
    const { Option } = await inquirer.prompt(MenuOPT);
    return Option;
}

export const Pausa = async () => {

    const pq = [
        {
            type:'input',
            name:'Enter',
            message: `Presione ${'ENTER'.yellow} para continuar`
        }
    ];
    
    console.log('\n');
    const pu = await inquirer.prompt(pq);
    return pu;
}

export const LeerInput = async (message) => {
    const pregunta = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0){
                    return 'Porfavor ingrese un mensage'
                }
                return true
            }
        }
    ];

    const {desc} = await inquirer.prompt(pregunta);
    return desc;
}

export const ListaBorrarTarea = async(tareas = [] ) => {
    const choices = tareas.map( (tarea , id ) => {
        const idx = `${id+1}`;
        return {
            value:tarea.id,
            name:`${`${idx}.`.green} ${tarea.descripcion}`
        }
    });

    choices.unshift({
        value:'0',
        name:`${`0.`.green} Cancelar`
    })

    const preguntas = [
        {
            type:'list',
            name:'id',
            message:'Borrar',
            choices
        }
    ];
    const { id } = await inquirer.prompt(preguntas);
    return id;
}

export const confirmar = async (message) =>{
    const pregunta = [
        {
            type:'confirm',
            name:'ok',
            message
        }
    ];
    const { ok } = await inquirer.prompt(pregunta);
    return ok;
}
