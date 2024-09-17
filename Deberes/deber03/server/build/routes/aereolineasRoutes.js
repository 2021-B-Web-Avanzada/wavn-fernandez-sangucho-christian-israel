"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aereolineasController_1 = require("../controllers/aereolineasController");
class AereolineasRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', aereolineasController_1.aereolineasController.list);
        this.router.get('/:id', aereolineasController_1.aereolineasController.getOne);
        this.router.post('/', aereolineasController_1.aereolineasController.create);
        this.router.put('/:id', aereolineasController_1.aereolineasController.update);
        this.router.delete('/:id', aereolineasController_1.aereolineasController.delete);
    }
}
const aereolineasRoutes = new AereolineasRoutes();
exports.default = aereolineasRoutes.router;
