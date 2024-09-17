//09-ejercicio-lec-esc-promesas.js
/*
HAcer una funcion que me acepte como parametros una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomar estos dos parametros y leer
el archivo y anadir el texto al final del archivo. al final
vamos a leer el archivo nuevamente e imprimir en consola. TODO
esto debe ser realizado con promesas
-Promesa de lectura
-Promesa de escritura
 */
/*
function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise(//Definicion de la promesa
        (resolve, reject)=> {
            if(numero % 2==0) {
                resolve(numero);
            }else {
                reject('No es par =(');
            }
        }
    )
    return miPrimerPromesa
}
 */
const fs = require('fs');

function promise_read(path_r,content_New){
    const my_promise = new Promise(
        (res,rej)=> {
            fs.readFile(
                path_r,
                'utf-8',
                (error_read, content_read)=>{
                    if(error_read){
                        rej('error leyendo contenido '+error_read);
                    }else {

                        res(content_read);
                    }
                }
            )
        }
    )
    return my_promise;
}
function promise_write(path,content_Old,content_New){
    const my_promise = new Promise(
        (res,rej)=>{
            content_New=content_Old+'\n'+content_New;
            fs.writeFile(
                path,
                content_New,
                'utf-8',
                (error_write)=>{
                    if (error_write) throw error_write;
                    console.log('ok saved');
                    res(content_New);
                })
        }
    )
    return my_promise;
}
promise_read('./06-ejemplo.txt')
    .then(
        (content_read)=>{
            console.log(content_read);
            return promise_write('./06-ejemplo.txt',content_read,"new content");
        }
    )
    .then(
        (contend)=>{
            console.log(contend);
        }
    )
    .catch(

    )
    .finally()