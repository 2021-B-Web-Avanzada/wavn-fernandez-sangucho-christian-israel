import {Router} from "express";
import {pedidoDetalleController} from "../controllers/pedidoDetalleController";

class PedidoDetalleRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/',pedidoDetalleController.list);
        this.router.get('/:id',pedidoDetalleController.getOne);
        this.router.post('/',pedidoDetalleController.create);
        this.router.put('/:id',pedidoDetalleController.update);
        this.router.delete('/:id',pedidoDetalleController.delete);
    }
}

const pedidoDetalleRouter = new PedidoDetalleRoutes();
export default pedidoDetalleRouter.router;