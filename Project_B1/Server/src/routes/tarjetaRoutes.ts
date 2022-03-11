import {Router} from "express";
import {tarjetaController} from "../controllers/tarjetaController";

class TarjetaRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/',tarjetaController.list);
        this.router.get('/:id',tarjetaController.getOne);
        this.router.post('/',tarjetaController.create);
        this.router.put('/:id',tarjetaController.update);
        this.router.delete('/:id',tarjetaController.delete);
    }
}

const tarjetaRouter = new TarjetaRoutes();
export default tarjetaRouter.router;