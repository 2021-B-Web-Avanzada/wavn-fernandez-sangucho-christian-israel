//01-variables.ts

let nombre: string = 'christian'; //primitivo
let nombre2: String = 'christian2'; //clase String
//nombre=1
nombre = 'Israel';
let edad: number = 32;
let casado: boolean = false;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 12.4;
//Duck Typing
let apellido = 'Fernandez'; //string->
apellido = 'christian'; //igual a otros string
apellido.toString(); //metodos string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMjultiple: number | string | Date = 2;
edadMjultiple = '2';
edadMjultiple = 2222;
edadMjultiple = 'dos';
edadMjultiple = new Date();
//edadMultiple = true;