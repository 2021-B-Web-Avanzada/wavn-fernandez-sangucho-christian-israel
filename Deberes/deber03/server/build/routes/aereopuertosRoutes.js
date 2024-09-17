"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aereopuertosController_1 = require("../controllers/aereopuertosController");
class AereopuertosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', aereopuertosController_1.aereopuertosController.list);
        this.router.get('/:id', aereopuertosController_1.aereopuertosController.getOne);
        this.router.post('/', aereopuertosController_1.aereopuertosController.create);
        this.router.put('/:id', aereopuertosController_1.aereopuertosController.update);
        this.router.delete('/:id', aereopuertosController_1.aereopuertosController.delete);
    }
}
const aereopuertosRoutes = new AereopuertosRoutes();
exports.default = aereopuertosRoutes.router;
