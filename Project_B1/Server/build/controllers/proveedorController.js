"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.proveedorController = void 0;
const database_1 = __importDefault(require("../database"));
class ProveedorController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const proveedor = yield database_1.default.query('SELECT * FROM proveedor');
            res.json(proveedor);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const proveedor = yield database_1.default.query('SELECT * FROM proveedor WHERE idProveedor = ?', [id]);
            if (proveedor.length > 0) {
                return res.json(proveedor);
            }
            res.status(404).json({ text: "Proveedor doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO proveedor set?', [req.body]);
            res.json({ message: 'proveedor saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE proveedor set ? WHERE idProveedor = ?', [req.body, id]);
            res.json({ message: 'proveedor was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM proveedor WHERE idProveedor = ?', [id]);
            res.json({ message: 'proveedor was deleted' });
        });
    }
}
exports.proveedorController = new ProveedorController();
