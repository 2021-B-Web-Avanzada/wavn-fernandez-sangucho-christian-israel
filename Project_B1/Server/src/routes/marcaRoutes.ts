import {Router} from "express";
import {marcaController} from "../controllers/marcaController";

class MarcaRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void{
        this.router.get('/:id',marcaController.list);
    }
}

const marcaRouter = new MarcaRoutes();
export default marcaRouter.router;