import {Request,Response} from 'express';
import pool from '../database'
class ClienteController{
    public async list (req: Request,res:Response) {
        const clientes = await pool.query('SELECT * FROM cliente');
        res.json(clientes);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const clientes = await pool.query('SELECT * FROM cliente WHERE cedula = ?',[id]);
        if (clientes.length>0){
            return res.json(clientes);
        }
        res.status(404).json({text:"Cliente doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO cliente set?',[req.body])
        res.json({message:'cliente saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE cliente set ? WHERE cedula = ?',[req.body,id])
        res.json({message:'cliente was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM cliente WHERE cedula = ?',[id])
        res.json({message:'cliente was deleted'});
    }
}

export  const clienteController = new ClienteController();