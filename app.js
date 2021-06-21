console.clear();

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
                            





console.log(argv);

const base = argv.base;
const limite = argv.limite;
const listar = argv.listar;

console.log(listar);
crearArchivo(base,limite,listar)
    .then(nombreArchivo => console.log(nombreArchivo,'creado'))
    .catch(err => console.log(err));