import inquirer from 'inquirer';
var colors = import('colors');


const MenuOPT = [
    {
        type:'list',
        name:'Option',
        message: 'Que dezea realizar',
        choices: [{
            value: '1',
            name:`1. Buscar ciudad`
        },
        {
            value: '2',
            name:`2. Historial`
        },
        {
            value: '0',
            name:`0. Salir`
        }
    ]
    }
];

export const IMenu = async () =>{
    console.clear();
    
    console.log('=======================');
    console.log(' Selecione una opcion ');
    console.log('=======================\n');
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

export const ListaLugares = async(lugares = [] ) => {
    const choices = lugares.map( (lugar , id ) => {
        const idx = `${id+1}`;
        return {
            value:lugar.id,
            name:`${`${idx}.`.green} ${lugar.nombre}`
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
            message:'Seleccione el lugar:',
            choices
        }
    ];
    const { id } = await inquirer.prompt(preguntas);
    return id;
}



export const MonstrarListaCheck = async(tareas = [] ) => {
    const choices = tareas.map( (tarea , id ) => {
        const idx = `${id+1}`;
        return {
            value:tarea.id,
            name:`${`${idx}.`.green} ${tarea.descripcion}`,
            checked: (tarea.completado)? true : false
        }
    });


    const preguntas = [
        {
            type:'checkbox',
            name:'ids',
            message:'Seleccione',
            choices
        }
    ];
    const { ids } = await inquirer.prompt(preguntas);
    return ids;
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
