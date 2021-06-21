const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }

        return true
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla creada'
    })
    
    .argv;


    module.exports = argv;