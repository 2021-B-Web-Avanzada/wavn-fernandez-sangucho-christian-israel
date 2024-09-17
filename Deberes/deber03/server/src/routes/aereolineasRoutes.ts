import {Router} from "express";
import {aereolineasController} from "../controllers/aereolineasController";

class AereolineasRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/',aereolineasController.list);
        this.router.get('/:id',aereolineasController.getOne);
        this.router.post('/',aereolineasController.create);
        this.router.put('/:id',aereolineasController.update);
        this.router.delete('/:id',aereolineasController.delete);
    }
}

const aereolineasRoutes = new AereolineasRoutes();
export default aereolineasRoutes.router;