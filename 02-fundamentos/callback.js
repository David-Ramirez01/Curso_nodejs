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

const getEmpleado =  (id , callback ) => {
    const empleado = empleados.find( e => e.id === id)

    if (empleado){
        callback(null , empleado)
    }else{
        callback(`empleado con id ${ id } no existe`)
    }
}


const getSalario = (id , callback ) => {
    const Salario = Salarios.find( s => s.id === id )

    if (Salario){
        callback(null , Salario)
    }else{
        callback(`No se encontro ssalario para el empleado con id ${id}`)
    }
}


const id =3 ;


getEmpleado( id , (err , empleado) => {
    if (err){
        console.log("ERROR")
        return console.log(err)
    }
        console.log('Empleado existe')
        console.log(empleado)
    
})

getSalario(id , (err , Salarios) => {
    if(err){
        console.log("ERROR")
        return console.log(err)
    }
        console.log("Salario encontrado")
        console.log(Salarios)
    
})


