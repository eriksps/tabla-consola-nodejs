const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de Multiplicar'

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Limite de la tabla'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true;
    })
    .check((argv, option) => {
        if (isNaN(argv.h)) {
            throw 'El limite  tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;