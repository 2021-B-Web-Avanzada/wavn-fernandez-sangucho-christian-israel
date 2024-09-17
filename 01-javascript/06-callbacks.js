//06-callbacks.js
const fs = require('fs'); //file system
//06-ejemplo txt-> hola
console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt',
    'utf-8',
    (error,contenido)=>{
        if(error){
            console.error({mensaje:'error leyendo contenido',error:error});
        }else {
            console.log(contenido);
            fs.readFile(
                './01-variables.js',
                'utf-8',
                (errorvariable, contenidovairble)=>{
                    if(errorvariable){
                        console.error({mensaje:'error leyendo contenido',error:errorvariable});
                    }else {
                        console.log(contenidovairble);
                    }
                }
            )
        }
    }
);
console.log('TERCERO');