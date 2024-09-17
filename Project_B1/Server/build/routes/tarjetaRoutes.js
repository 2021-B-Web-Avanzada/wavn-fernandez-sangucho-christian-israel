"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tarjetaController_1 = require("../controllers/tarjetaController");
class TarjetaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', tarjetaController_1.tarjetaController.list);
        this.router.get('/:id', tarjetaController_1.tarjetaController.getOne);
        this.router.post('/', tarjetaController_1.tarjetaController.create);
        this.router.put('/:id', tarjetaController_1.tarjetaController.update);
        this.router.delete('/:id', tarjetaController_1.tarjetaController.delete);
    }
}
const tarjetaRouter = new TarjetaRoutes();
exports.default = tarjetaRouter.router;
