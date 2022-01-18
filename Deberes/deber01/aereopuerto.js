const inquirer = require('inquirer');
const fs = require('fs');

class Aereopuerto{
    constructor(id,nombre,ciudad,telefono,tipo) {
        this.id = id;
        this.nombre=nombre;
        this.ciudad=ciudad;
        this.telefono=telefono;
        this.tipo=tipo;
        this.aereolineas=[];

    }
    data(){
        return this.id+','+this.nombre+','+this.ciudad+','+this.telefono+','+this.tipo;
    }
}

class Aereolinea{
    constructor(nombre,origen,destino,duracion,capacidad) {
        this.nombre=nombre;
        this.origen=origen;
        this.destino=destino;
        this.duracion=duracion;
        this.capacidad=capacidad;
    }
    data(){
        return this.nombre+','+this.origen+','+this.destino+','+this.duracion+','+this.capacidad;
    }
}

async function datos (){
    try{
        const answer = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'ingresa el id'
                },
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'ingresa el nombre'
                },
                {
                    type: 'input',
                    name: 'ciudad',
                    message: 'ingrese la ciudad'
                },
                {
                    type: 'input',
                    name: 'telefono',
                    message: 'ingresa el telefono'
                },
                {
                    type: 'input',
                    name: 'tipo',
                    message: 'ingresa el tipo'
                }
            ]);
        //const content_agregate = Object.values(answer)
        const aereopuerto_New = new Aereopuerto(answer.id,answer.nombre,answer.ciudad,answer.telefono,answer.tipo)
        return aereopuerto_New.data();
    }catch (e){
        console.log(e);
    }
}

async function datos_1 (){
    try{
        const answer = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'ingresa el nombre'
                },
                {
                    type: 'input',
                    name: 'origen',
                    message: 'ingresa el origen'
                },
                {
                    type: 'input',
                    name: 'destino',
                    message: 'ingrese el destino'
                },
                {
                    type: 'input',
                    name: 'duracion',
                    message: 'ingresa la duracion'
                },
                {
                    type: 'input',
                    name: 'capacidad',
                    message: 'ingresa el tipo'
                }
            ]);
        //const content_agregate = Object.values(answer)
        const aereolinea_New = new Aereolinea(answer.nombre,answer.origen,answer.destino,answer.duracion,answer.capacidad)
        return aereolinea_New.data();
    }catch (e){
        console.log(e);
    }
}


function promise_read(path_r,datos_new){
    const my_promise = new Promise(
        (res,rej)=> {
            fs.readFile(
                path_r,
                'utf-8',
                (error_read, content_read)=>{
                    if(error_read){
                        rej('error leyendo contenido '+error_read);
                    }else {
                        content_read= content_read+'\n'+datos_new;
                        res(content_read);
                    }
                }
            )
        }
    )
    return my_promise;
}
function promise_write(path,content_New){
    const my_promise = new Promise(
        (res,rej)=>{
            //content_New=id+','+nombre+','+ciudad+','+telefono+','+capacidad;

            fs.writeFile(
                path,
                content_New,
                'utf-8',
                (error_write)=>{
                    if (error_write) throw error_write;
                    res(content_New);
                })
        }
    )
    return my_promise;
}

async function main (){
    try{
        const answer = await inquirer
            .prompt([
                {
                    name: "select",
                    type: "list",
                    message: "Que desea hacer?",
                    choices: ["Consultar","Agregar", "Actualizar", "Borrar"],
                },
            ])
            .then((answer) => {
                if(answer.select==="Consultar"){
                    promise_read('./aereopuerto.txt','')
                        .then(
                            (answer1)=>{
                                console.log(answer1);
                            }
                        )
                }if(answer.select==="Agregar"){
                    datos()
                        .then(
                            (answer)=>{
                                return promise_read('./aereopuerto.txt',answer)
                            }
                        )
                        .then(
                            (content_Old)=>{
                                return promise_write('./aereopuerto.txt',content_Old)
                            }
                        ).catch()
                }
            });
        console.log('answer',answer);
    }catch (e){
        console.log(e);
    }
}


main();



/*datos()
    .then(
        (answer)=>{
            return promise_read('./aereopuerto.txt',answer)
        }
    )
    .then(
        (content_Old)=>{
            return promise_write('./aereopuerto.txt',content_Old)
        }
    ).catch()*/

