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
exports.tarjetaController = void 0;
const database_1 = __importDefault(require("../database"));
class TarjetaController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tarjeta = yield database_1.default.query('SELECT * FROM tarjeta');
            res.json(tarjeta);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const tarjetas = yield database_1.default.query('SELECT * FROM tarjeta WHERE Cliente_idCliente = ?', [id]);
            if (tarjetas.length > 0) {
                return res.json(tarjetas);
            }
            res.status(404).json({ text: "Tarjeta doesn't exists" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tarjeta set?', [req.body]);
            res.json({ message: 'tarjeta saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE tarjeta set ? WHERE idTarjeta = ?', [req.body, id]);
            res.json({ message: 'tarjeta was updated' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM tarjeta WHERE idTarjeta = ?', [id]);
            res.json({ message: 'tarjeta was deleted' });
        });
    }
}
exports.tarjetaController = new TarjetaController();
