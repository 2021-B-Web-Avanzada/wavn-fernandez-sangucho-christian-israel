//04-clases.ts
class Persona{
    public nombre: string;
    public apellido: string;
    static nombreReferencia: string = 'Humano';
    protected nombreYApellido = '';// Duck Typing -> string
    constructor(
        nommbreParametro: string,
        apellidoParametro: string
    ) {
        this.nombre = nommbreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nommbreParametro+' '+apellidoParametro;
    }

    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string,// Modificador acceso -> propiedad de la clase
        public estadoCivil: string //Modificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}
const christian = new Usuario(
    'christian',
    'Fernandez',
    '1725674020',
    'soltero'
);
christian.nombre;
christian.apellido;
christian.cedula;
christian.estadoCivil;

