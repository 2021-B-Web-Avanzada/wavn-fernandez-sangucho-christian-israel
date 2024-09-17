/*
Hacer una funcion que me  acepte como parametros una variable
con el path del archivo y el contenido a agregar al contenido
del archivo . La funcion debe tener eetos dos parametros y leer
el archivo y aniadir el texto al final del archivo.
 */
/*
fs.escribirfile(
    path,
    contenido,
    'utf-9',
    (error)=>{

    }
);
*/
const fs = require('fs'); //file system
function escribirArchivo(path,content_New){
    fs.readFile(
        path,
        'utf-8',
        (error_read, content_read)=>{
            if(error_read){
                console.error({mensaje:'error leyendo contenido',error:error_read});
            }else {
                console.log(content_read);
                fs.writeFile(
                    path,
                    content_read+' '+content_New,
                    'utf-8',
                    (error_write)=>{
                        if (error_write) throw error_write;
                        console.log('ok saved');
                    }

                )
            }}
    )
}

escribirArchivo(
    './06-ejemplo.txt',
    'Buenos Dias'
    )
