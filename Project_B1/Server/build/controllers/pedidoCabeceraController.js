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
exports.pedidoCabeceraController = void 0;
const database_1 = __importDefault(require("../database"));
class PedidoCabeceraController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido_cabecera = yield database_1.default.query('SELECT * FROM pedido_cabecera');
            res.json(pedido_cabecera);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido_cabecera = yield database_1.default.query('SELECT * FROM pedido_cabecera WHERE idPedido_Cabecera = ?', [id]);
            if (pedido_cabecera.length > 0) {
                return res.json(pedido_cabecera);
            }
            res.status(404).json({ text: "pedido_cabecera doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pedido_cabecera set?', [req.body]);
            res.json({ message: 'pedido_cabecera saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pedido_cabecera set ? WHERE idPedido_Cabecera = ?', [req.body, id]);
            res.json({ message: 'pedido_cabecera was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pedido_cabecera WHERE idPedido_Cabecera = ?', [id]);
            res.json({ message: 'pedido_cabecera was deleted' });
        });
    }
}
exports.pedidoCabeceraController = new PedidoCabeceraController();
