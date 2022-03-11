import {Request,Response} from 'express';
import pool from '../database'
class PedidoDetalleController{
    public async list (req: Request,res:Response) {
        const pedido_detalle = await pool.query('SELECT * FROM pedido_detalle');
        res.json(pedido_detalle);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const pedido_detalle = await pool.query('SELECT * FROM pedido_detalle WHERE idPedido_Detalle = ?',[id]);
        if (pedido_detalle.length>0){
            return res.json(pedido_detalle);
        }
        res.status(404).json({text:"pedido_detalle doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO pedido_detalle set?',[req.body])
        res.json({message:'pedido_detalle saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE pedido_detalle set ? WHERE idPedido_Detalle = ?',[req.body,id])
        res.json({message:'pedido_detalle was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM pedido_detalle WHERE idPedido_Detalle = ?',[id])
        res.json({message:'pedido_detalle was deleted'});
    }
}

export  const pedidoDetalleController = new PedidoDetalleController();