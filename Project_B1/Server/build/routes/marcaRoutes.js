"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const marcaController_1 = require("../controllers/marcaController");
class MarcaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/:id', marcaController_1.marcaController.list);
    }
}
const marcaRouter = new MarcaRoutes();
exports.default = marcaRouter.router;
