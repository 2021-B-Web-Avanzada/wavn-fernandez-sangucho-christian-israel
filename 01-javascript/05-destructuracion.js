//05-destructuracion.js
//Destructuracion de objetos
const adrian = {
    nombre: "Adrian"
};
const carolina ={
    nombre: "Carolina",
    apellido: "Eguez"
};
const adrianCarolina = {
    ...carolina,
    ...adrian
};
console.log('adianCarolina',adrianCarolina);

//Destrucuturacion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos = [6,7,8,9,10];
const superArreglo = [
    ...arregloUno, //El orden importa
    ...arregloDos,
];
console.log('superArreglo',superArreglo);
console.log(...superArreglo);