import {Router} from "express";
import {productoController} from "../controllers/productoController";

class ProductoRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/',productoController.list);
        this.router.get('/:id',productoController.getOne);
        this.router.post('/',productoController.create);
        this.router.put('/:id',productoController.update);
        this.router.delete('/:id',productoController.delete);
    }
}

const productoRouter = new ProductoRoutes();
export default productoRouter.router;