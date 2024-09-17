import {Router} from "express";
import {categoriaController} from "../controllers/categoriaController";

class TarjetaRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/',categoriaController.list);
        this.router.get('/:id',categoriaController.getOne);
        this.router.post('/',categoriaController.create);
        this.router.put('/:id',categoriaController.update);
        this.router.delete('/:id',categoriaController.delete);
    }
}

const tarjetaRouter = new TarjetaRoutes();
export default tarjetaRouter.router;