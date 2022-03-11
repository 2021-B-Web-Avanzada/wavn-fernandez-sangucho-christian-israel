"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const tarjetaRoutes_1 = __importDefault(require("./routes/tarjetaRoutes"));
const categoriaRoutes_1 = __importDefault(require("./routes/categoriaRoutes"));
const proveedorRoutes_1 = __importDefault(require("./routes/proveedorRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const pedidoDetalleRoutes_1 = __importDefault(require("./routes/pedidoDetalleRoutes"));
const pedidoCabeceraRoutes_1 = __importDefault(require("./routes/pedidoCabeceraRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/cliente', clienteRoutes_1.default);
        this.app.use('/api/tarjeta', tarjetaRoutes_1.default);
        this.app.use('/api/categoria', categoriaRoutes_1.default);
        this.app.use('/api/proveedor', proveedorRoutes_1.default);
        this.app.use('/api/producto', productoRoutes_1.default);
        this.app.use('/api/pedidodetalle', pedidoDetalleRoutes_1.default);
        this.app.use('/api/pedidocabecera', pedidoCabeceraRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port 3000', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
