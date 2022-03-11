import {Request,Response} from 'express';
import pool from '../database'
class PedidoCabeceraController{
    public async list (req: Request,res:Response) {
        const pedido_cabecera = await pool.query('SELECT * FROM pedido_cabecera');
        res.json(pedido_cabecera);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const pedido_cabecera = await pool.query('SELECT * FROM pedido_cabecera WHERE idPedido_Cabecera = ?',[id]);
        if (pedido_cabecera.length>0){
            return res.json(pedido_cabecera);
        }
        res.status(404).json({text:"pedido_cabecera doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO pedido_cabecera set?',[req.body])
        res.json({message:'pedido_cabecera saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE pedido_cabecera set ? WHERE idPedido_Cabecera = ?',[req.body,id])
        res.json({message:'pedido_cabecera was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM pedido_cabecera WHERE idPedido_Cabecera = ?',[id])
        res.json({message:'pedido_cabecera was deleted'});
    }
}

export  const pedidoCabeceraController = new PedidoCabeceraController();