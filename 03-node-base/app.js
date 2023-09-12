const { Creattable } = require('./componenetes/multiplicar');

console.clear();
const [ , , arg3 = 'base=5'] =process.argv;
const [ ,base = 5] = arg3.split('=');
console.log(base)


// const base = 7;
// Creattable(base)
//     .then(n => console.log(n,"Creado"))
//     .catch( err => console.log(err));


