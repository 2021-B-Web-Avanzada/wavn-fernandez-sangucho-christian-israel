//10-async-await

const promesaLeerArchivo =() => {
    return new Promise(
        (res,rej)=>{
        res ('Contenido Leer Archivo');
        //rej('ERROR = (');
    }
    );
}

const promesaEscribirArchivo = () => {
    return new Promise(
        (res,rej)=> {
            res('Contenido Escribir Archivo');
            //rej('ERROR = (');
        }
    );
}

//ASYNC AWAIT
//1 metodos de clases
//2. Funtion
//AL momento de usar async esa funcion se coviete en una promesa
const ejemplo1 = async function (){
    console.log('1')
}
const ejemplo2 = async ()=> {
    console.log('1')
}
async  function ejercicio(){
    console.log('1')
    try{
        console.log('2');
        const contenidoArchivoActual = await  promesaLeerArchivo();
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log('5');
    }catch (error){

    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
ejercicio()
    .then(
        (data)=>{
            console.log('esta es la respuesta del asynic await', data)
        }
    ) .catch() .finally()