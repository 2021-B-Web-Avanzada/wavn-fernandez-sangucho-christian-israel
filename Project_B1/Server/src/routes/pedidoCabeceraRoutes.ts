import {Router} from "express";
import {pedidoCabeceraController} from "../controllers/pedidoCabeceraController";

class PedidoCabeceraRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/',pedidoCabeceraController.list);
        this.router.get('/:id',pedidoCabeceraController.getOne);
        this.router.post('/',pedidoCabeceraController.create);
        this.router.put('/:id',pedidoCabeceraController.update);
        this.router.delete('/:id',pedidoCabeceraController.delete);
    }
}

const pedidoCabeceraRouter = new PedidoCabeceraRoutes();
export default pedidoCabeceraRouter.router;