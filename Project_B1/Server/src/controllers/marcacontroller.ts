import {Request,Response} from 'express';
import pool from '../database'
class MarcaController{
    public async list (req: Request,res:Response) {
        const {id} = req.params;
        const producto = await pool.query('SELECT * FROM producto WHERE marca_producto = ?',[id]);
        res.json(producto);
    }
}

export  const marcaController = new MarcaController();