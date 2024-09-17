"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proveedorController_1 = require("../controllers/proveedorController");
class ProveedorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', proveedorController_1.proveedorController.list);
        this.router.get('/:id', proveedorController_1.proveedorController.getOne);
        this.router.post('/', proveedorController_1.proveedorController.create);
        this.router.put('/:id', proveedorController_1.proveedorController.update);
        this.router.delete('/:id', proveedorController_1.proveedorController.delete);
    }
}
const proveedorRoutes = new ProveedorRoutes();
exports.default = proveedorRoutes.router;
