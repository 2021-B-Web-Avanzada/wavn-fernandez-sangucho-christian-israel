//08-promesas.js
const fs = require('fs');

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
function promesaElevarAlCuadrado(numero){
    const miPrimeraPromesa = new Promise(
        (resolve,reject)=> {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miPrimeraPromesa
}

promesaEsPar(6)
    .then(
        (datosPromesa)=>{
            console.log(datosPromesa);
            return promesaElevarAlCuadrado(datosPromesa);
        }
    )
    .then(
        (datosElevarAlCuadrado)=>{
            console.log(datosElevarAlCuadrado);
        }
    )
    .catch(
        (error)=>{
            console.log(error)
        }
    )
    .finally()