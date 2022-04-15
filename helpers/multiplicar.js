const fs = require('fs');
//una forma de Usar   const colors = require('colors');
require('colors');

const crearArchivo = async( base = 5, listar, hasta) => {

    try {   
        let salida, consola = '';

        for (let i = 1; i <= hasta; i ++){
            salida += `${base} X ${ i } = ${base * i} \n`;
            consola += `${base} ${'X'.red} ${ i } = ${base * i} \n`;
        }
        
        if(listar === true){
            console.log('===Tabla del: '.yellow, base, '==='.yellow);
            console.log(consola);
        }
        
        
        /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
            if (err) throw err;
            console.log('Archivo creado correctamente');
        } ) */
        
        
        fs.writeFileSync( `./archivos-salida/tabla-${base}.txt`, salida );
        
        return `Archivo crado con nombre tabla-${base}.txt`
        
    } catch (error) {
        throw error;
    }
}

// Abajo se tiene otra forma de hacer


// const crearArchivo = ( base = 5) => {
//     return new Promise((resolve, reject) => {

//     console.log('===Tabla del: ', base, '===');

//     let salida = '';

//     for (let i = 1; i <= 10; i ++){
//        salida += `${base} X ${ i } = ${base * i} \n`
//     }
    
//     console.log(salida);
    
//     /*fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
//         if (err) throw err;
//         console.log('Archivo creado correctamente');
//     } ) */


//     fs.writeFileSync( `tabla-${base}.txt`, salida );
     
//     resolve(`Archivo crado con nombre tabla-${base}.txt`,)

//     });
// }


module.exports = {
    crearArchivo
}