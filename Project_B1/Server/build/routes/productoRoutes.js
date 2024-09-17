"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', productoController_1.productoController.list);
        this.router.get('/:id', productoController_1.productoController.getOne);
        this.router.post('/', productoController_1.productoController.create);
        this.router.put('/:id', productoController_1.productoController.update);
        this.router.delete('/:id', productoController_1.productoController.delete);
    }
}
const productoRouter = new ProductoRoutes();
exports.default = productoRouter.router;
