//02.interfaces.ts

interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number; //opcional
    sueldo?: number; //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string |'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoAcutal: () => 'AP' | 'AF' | 'AT';
    //calcularImpuesto parametro nuemro impuesto, sueldo + sueldo * impuesto
    //estadoActual no reciba parametros, 'AP' 'AF' 'AT'
}
let user: Usuario = {
    nombre: 'Christian',
    apellido: 'Fernandez',
    casado: 0,
    sueldo: 11.2,
    estado: "AC",
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es:' +mensaje;
    },
    calcularImpuesto: impuesto => 10,
    estadoAcutal: () => {
        switch (this.estado){
            case "AC":
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}