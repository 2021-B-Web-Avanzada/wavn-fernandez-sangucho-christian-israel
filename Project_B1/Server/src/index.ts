import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import clienteRoutes from "./routes/clienteRoutes";
import tarjetaRoutes from "./routes/tarjetaRoutes";
import categoriaRoutes from "./routes/categoriaRoutes";
import proveedorRoutes from "./routes/proveedorRoutes";
import productoRoutes from "./routes/productoRoutes";
import pedidoDetalleRoutes from "./routes/pedidoDetalleRoutes";
import pedidoCabeceraRoutes from "./routes/pedidoCabeceraRoutes";

class Server{
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'))
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}))
    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/cliente',clienteRoutes);
        this.app.use('/api/tarjeta',tarjetaRoutes);
        this.app.use('/api/categoria',categoriaRoutes);
        this.app.use('/api/proveedor',proveedorRoutes);
        this.app.use('/api/producto',productoRoutes);
        this.app.use('/api/pedidodetalle',pedidoDetalleRoutes);
        this.app.use('/api/pedidocabecera',pedidoCabeceraRoutes);
    }

    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port 3000',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();