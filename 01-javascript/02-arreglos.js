//02-arreglos.js
let arreglo = [6,7,8,9,10];
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true,1,1.1,"Christian",undefined,null,{},[1,2]];
arreglo = [6,7,8,9,10];
console.log(arreglo);

//for of
for (let numero of arreglo){ //Volores
    console.log('numero',numero);
}
//for in
for (let indice in arreglo){ //Indices
    arreglo[indice];
    console.log('indice',indice);
}
let objetoPrueba = {a:'1',b:'2',c:'3'};
for (let llave in objetoPrueba){
    console.log('llave',llave);
}

arreglo.push(11); //agregar al final un elemento

arreglo.pop(); //eliminar al final un elemento

arreglo.unshift(5);// agregar al principio del arreglo

console.log(arreglo);

//agregar en el indice 0
//splice(indice,numero de elemntos eliminados,items a agregar)
//EJ arreglos.splice(0,3,1,2,3,4,5,6);
arreglo.splice(0,0,4);
//[4,5,6,7,8,9,10]
console.log(arreglo);
const indiceNueve = arreglo.indexOf(9);
//encuentra el primer elemento y devuelve el indice
arreglo.splice(indiceNueve,2);
//[4,5,6,7,8]
console.log(arreglo);

const arreglo1 = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//Funciones como parametros
//FIND
//enviamos una exoresion -> TRUTY FALSY
//devuelve el primero que cumple esa condiciones
/*const respuestaFind = arreglo1
    .find(
        function (valorActual,indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
            console.log('indiceActual',indiceActual);
            console.log('arregloCompleto',arregloCompleto);
            return valorActual.nombre === 'Cristian';
        }
    )
console.log('respuestaFind',respuestaFind);*/
//Cristian //Si no encuentra devuelve undefined


const respuestaIndex = arreglo1
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nombre === 'Cristian';
        }
    )
console.log('respuestaIndex',respuestaIndex);
//indice -> 6 //No encuentra -> -1


//ForEach
//itera el arreglo
const respuestaForEach = arreglo1
    .forEach(
        function (valorActual,indiceActual,arregloCompleto){
            console.log('valorActual',valorActual);
        }
    )
console.log('respuestaForEach',respuestaForEach);

//MAP (modifica o muta el arreglo y devuelve un nuevo arreglo)
//enviamos los daros del nuevo arreglo
//devuelve el nuevo arrreglo
const respuestaMap = arreglo1
    .map(
        function (valorActual,indiceACtual,arregloCompleto){
            const nuevoElemento = {
                id: valorActual.nombre,
                nombre: valorActual.nombre,
                nota: valorActual.nota+1,
            };
            return nuevoElemento;
        }

    )
console.log('respuestaMap',respuestaMap);


//FILTER(filtrar el arreglo)
//enviamos EXPRESION TRUTY o FALSY
//devuelve los elemtos que complen esa condicion

const respuestaFilter = arreglo1
    .filter(
        (valoActual, indiceActual, arregloCompleto) => {
            return valoActual.nota >= 14;
}
)
console.log('respuestaFilter',respuestaFilter);
console.log('arreglo1',arreglo1)


//SOME -> Expresion
//devuelve BOOLEANO
//Hay alguna nota menor a nueve? SI NO
//OR
const respuestaSome = arreglo1
    .some(
    function(valorActual,indiceActual,arregloCompleto) {
        return valorActual.nota < 9;

}
    )
console.log('respuestaSome',respuestaSome);