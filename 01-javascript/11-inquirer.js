//11-inquierer
const inquirer = require('inquirer');
//npm install inquirer
async function main (){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'ingresa tu nonbre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'ingresa tu email'
                }
            ]);
        console.log('Respuesta',respuesta);
    }catch (e){
        console.log(e);
    }
}
main();