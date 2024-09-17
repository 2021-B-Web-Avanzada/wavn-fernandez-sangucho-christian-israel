//-javascript
//      /01-varibales.js
//Mutables e Inmutables
//Mutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 5;
numeroDos = 8;
numeroUno = false;
numeroDos = true;
//Inmutables
const configuracionArchivos = "PDF";
//ConfiguracionArchivos = "XML";
//Vamos a preferir CONSt > LET > nunca VAR

//Tipos de Variables
const  numero = 1; // number
const sueldo = 1.2; //number
const texto = "Christian"; //String
const apellido = 'Fernandez'; //String
const booleano =  false; //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
//console.log(typeof Number(value: "asd")); number
//console.log(Number(value:"asd")); //Nan


//Truty and falsy
if (""){
    console.log("String vacio es verdadero");
}else {
    console.log("String vacio es Falsy");
}
if ("Chistian"){
    console.log("String con datos Es truty");
}else{
    console.log("String con datos Falso");
}

if (-1){
    console.log("Negativos Es truty");
}else{
    console.log("Negativo es Falso");
}
if (0){
    console.log("Cero Es truty");
}else{
    console.log("Cero es Falso");
}
if (1){
    console.log("Positivo Es truty");
}else{
    console.log("Positivo es Falso");
}

if (null){
    console.log("Null es Truty");
}else{
    console.log("Null es Falso");
}
if (undefined){
    console.log("undefined es Truty");
}else{
    console.log("undefined es Falso");
}

const christian = {
    nombre: "Chtistian",
    apellido: "Fernandez",
    edad: "57",
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
            color: "blanco",
            talla: "42"
    },
    mascota:["Lucho","Chispa","Pipo"],
};
//Acceder a las propiedades del objeto
christian.nombre;
christian["nombre"];
console.log(christian);
christian.nombre = "Chris";
christian.zapatos;
console.log(christian.zapatos);
christian.nombre = undefined;
console.log(christian);
console.log(Object.keys(christian));
console.log(Object.values(christian));
delete christian.nombre;
console.log(christian);


//Variables por valor o referencia
// Variables por valor en js son las primitivas: number String boolean
let edadchistian = 32;
let edadisrael = edadchistian;

console.log(edadchistian);
console.log(edadisrael);
edadchistian = edadisrael +1;
console.log(edadchistian);
console.log(edadisrael);


// Vaiebles por referencia: Object, {},[]
// let  rafael = {
//     nombre: "Rafael"
// };
// let lenin = rafael;
// console.log(rafael);
// console.log(lenin);
// lenin.nombre = "Lenin";
// console.log(rafael);
// console.log(lenin);
// delete  rafael.nombre;
// console.log(rafael);
//console.log(lenin);

let  rafael = {
     nombre: "Rafael"
 };
let lenin = Object.assign( {}, rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

let arrelgoNumero = [1,2,3,4,5];
let arregloClon = Object.assign([],arrelgoNumero);
console.log(arrelgoNumero);
console.log(arregloClon);
arrelgoNumero[0] = 200;
arregloClon[0] = 100;
console.log(arrelgoNumero);
console.log(arregloClon);