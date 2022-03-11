"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoCabeceraController_1 = require("../controllers/pedidoCabeceraController");
class PedidoCabeceraRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', pedidoCabeceraController_1.pedidoCabeceraController.list);
        this.router.get('/:id', pedidoCabeceraController_1.pedidoCabeceraController.getOne);
        this.router.post('/', pedidoCabeceraController_1.pedidoCabeceraController.create);
        this.router.put('/:id', pedidoCabeceraController_1.pedidoCabeceraController.update);
        this.router.delete('/:id', pedidoCabeceraController_1.pedidoCabeceraController.delete);
    }
}
const pedidoCabeceraRouter = new PedidoCabeceraRoutes();
exports.default = pedidoCabeceraRouter.router;
