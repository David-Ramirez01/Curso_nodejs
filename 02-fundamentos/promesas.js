const  empleados = [
    {
        id: 1,
        nombre: "Pepe"
    },
    {
        id: 2,
        nombre: "Andres"
    },
    {
        id: 3,
        nombre: "jay"
    }
];

const Salarios = [
    {
        id: 1,
        Salario: 1500
    },
    {
        id: 2,
        Salario: 2200
    },
];

const getEmpleado =  (id) => {
    return new Promise((resolve , reject) => {
        const empleado = empleados.find( e => e.id === id)?.nombre;
        (empleado)?resolve(empleado): reject(`el empleado con id ${id} no fue encontrado`);
    });
}

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = Salarios.find( s => s.id === id)?.Salario;
        (salario)?resolve(salario): reject(`No se encontro salario para el id ${id}`)
    })
}

const id = 2

// getEmpleado(id)
//     .then(empleado =>console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then( salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
    .catch( err => console.log(err))