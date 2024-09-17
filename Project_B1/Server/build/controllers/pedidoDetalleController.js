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
exports.pedidoDetalleController = void 0;
const database_1 = __importDefault(require("../database"));
class PedidoDetalleController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pedido_detalle = yield database_1.default.query('SELECT * FROM pedido_detalle');
            res.json(pedido_detalle);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pedido_detalle = yield database_1.default.query('SELECT * FROM pedido_detalle WHERE idPedido_Detalle = ?', [id]);
            if (pedido_detalle.length > 0) {
                return res.json(pedido_detalle);
            }
            res.status(404).json({ text: "pedido_detalle doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO pedido_detalle set?', [req.body]);
            res.json({ message: 'pedido_detalle saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE pedido_detalle set ? WHERE idPedido_Detalle = ?', [req.body, id]);
            res.json({ message: 'pedido_detalle was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM pedido_detalle WHERE idPedido_Detalle = ?', [id]);
            res.json({ message: 'pedido_detalle was deleted' });
        });
    }
}
exports.pedidoDetalleController = new PedidoDetalleController();
