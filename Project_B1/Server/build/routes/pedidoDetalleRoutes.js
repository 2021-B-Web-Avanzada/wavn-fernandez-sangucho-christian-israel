"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoDetalleController_1 = require("../controllers/pedidoDetalleController");
class PedidoDetalleRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', pedidoDetalleController_1.pedidoDetalleController.list);
        this.router.get('/:id', pedidoDetalleController_1.pedidoDetalleController.getOne);
        this.router.post('/', pedidoDetalleController_1.pedidoDetalleController.create);
        this.router.put('/:id', pedidoDetalleController_1.pedidoDetalleController.update);
        this.router.delete('/:id', pedidoDetalleController_1.pedidoDetalleController.delete);
    }
}
const pedidoDetalleRouter = new PedidoDetalleRoutes();
exports.default = pedidoDetalleRouter.router;
