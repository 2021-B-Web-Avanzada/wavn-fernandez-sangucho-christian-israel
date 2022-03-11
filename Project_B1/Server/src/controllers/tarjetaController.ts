import {Request,Response} from 'express';
import pool from '../database'
class TarjetaController{
    public async list (req: Request,res:Response) {
        const tarjeta = await pool.query('SELECT * FROM tarjeta');
        res.json(tarjeta);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const tarjetas = await pool.query('SELECT * FROM tarjeta WHERE Cliente_idCliente = ?',[id]);
        if (tarjetas.length>0){
            return res.json(tarjetas);
        }
        res.status(404).json({text:"Tarjeta doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO tarjeta set?',[req.body])
        res.json({message:'tarjeta saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE tarjeta set ? WHERE idTarjeta = ?',[req.body,id])
        res.json({message:'tarjeta was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM tarjeta WHERE idTarjeta = ?',[id])
        res.json({message:'tarjeta was deleted'});
    }
}

export  const tarjetaController = new TarjetaController();