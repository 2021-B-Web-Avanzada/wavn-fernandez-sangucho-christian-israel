//04-funciones.js

function soloNumeros(a,b,c){
    return a -b +c; //valor a devolver
}
//JS permite el uso de funciones sin validaciones
//soloNumeros('V',true[1,2,3]);
//soloNumeros((a)->a,)
//soloNumeros(1,2,3);
//soloNumeros();


function sololetras(a,b,c){
    console.log(a,b,c);
}

//funciones nombradas - named function
function funcionNombrado(){
}
//Funciones anonimas
const funcionesSinNombre1 = function() {};
var funcionesSinNombre2 = function (){};
let funtionesSinNombre3 = function (){};
[].forEach(function (){})
funcionesSinNombre1();
funcionesSinNombre2();
funtionesSinNombre3();

//Funciones anonimas - Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () =>{};
[].forEach(()=>{});
funcionFatArrow1();
funcionFatArrow2();
funcionFatArrow3();

const funcionFatArrow4 = () => {};
const funcionFatArrow5 = (x) => {
    return x+1;
};
const funcionFatArrow6 = (x) => x+1; //FAT ARROW FUNCTION
//Una solo linea
//Omito return
//Omito llaves
const funcionFatArrow7 = x => x+1; //Si solo tenemos un paremetro
//Omito los parentesis
const funcionFatArrow8 = (x,y,z)=>x+y+z;

function sumarNuneros(...otrosNumeros){//Parametros inf [2,3,..]
    let total = 0;
    otrosNumeros.forEach(
        (valorActual)=>{
            total = total+valorActual;
        }
    );
    return total;//return otrosNumeros((a,v)=>a+v,0);
}
sumarNuneros(1,2,3,4,5,6,7,8,9,10,11,12,13)
