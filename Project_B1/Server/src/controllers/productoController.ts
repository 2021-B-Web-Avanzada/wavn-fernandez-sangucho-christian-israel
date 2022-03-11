import {Request,Response} from 'express';
import pool from '../database'
class ProductoController{
    public async list (req: Request,res:Response) {
        const producto = await pool.query('SELECT * FROM producto');
        res.json(producto);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const producto = await pool.query('SELECT * FROM producto WHERE idProducto = ?',[id]);
        if (producto.length>0){
            return res.json(producto);
        }
        res.status(404).json({text:"Producto doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO producto set?',[req.body])
        res.json({message:'tarjeta saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE producto set ? WHERE idProducto = ?',[req.body,id])
        res.json({message:'Producto was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM producto WHERE idProducto = ?',[id])
        res.json({message:'Producto was deleted'});
    }
}

export  const productoController = new ProductoController();