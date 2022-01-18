//02.interfaces.ts
var _this = this;
var user = {
    nombre: 'Christian',
    apellido: 'Fernandez',
    casado: 0,
    sueldo: 11.2,
    estado: "AC",
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es:' + mensaje;
    },
    calcularImpuesto: function (impuesto) { return 10; },
    estadoAcutal: function () {
        switch (_this.estado) {
            case "AC":
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
