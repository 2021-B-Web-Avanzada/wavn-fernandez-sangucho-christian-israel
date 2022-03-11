import {Router} from "express";
import {aereopuertosController} from "../controllers/aereopuertosController";

class AereopuertosRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',aereopuertosController.list);
        this.router.get('/:id',aereopuertosController.getOne);
        this.router.post('/',aereopuertosController.create);
        this.router.put('/:id',aereopuertosController.update);
        this.router.delete('/:id',aereopuertosController.delete);
    }
}

const aereopuertosRoutes = new AereopuertosRoutes();
export default aereopuertosRoutes.router;