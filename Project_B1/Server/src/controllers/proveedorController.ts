import {Request,Response} from 'express';
import pool from '../database'
class ProveedorController{
    public async list (req: Request,res:Response) {
        const proveedor = await pool.query('SELECT * FROM proveedor');
        res.json(proveedor);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const proveedor = await pool.query('SELECT * FROM proveedor WHERE idProveedor = ?',[id]);
        if (proveedor.length>0){
            return res.json(proveedor);
        }
        res.status(404).json({text:"Proveedor doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO proveedor set?',[req.body])
        res.json({message:'proveedor saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE proveedor set ? WHERE idProveedor = ?',[req.body,id])
        res.json({message:'proveedor was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM proveedor WHERE idProveedor = ?',[id])
        res.json({message:'proveedor was deleted'});
    }
}

export  const proveedorController = new ProveedorController();