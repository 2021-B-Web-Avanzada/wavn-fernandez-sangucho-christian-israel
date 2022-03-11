import {Request,Response} from 'express';
import pool from '../database'
class AereopuertosController{
    public async list (req: Request,res:Response) {
        const aereopuertos = await pool.query('SELECT * FROM aereopuerto');
        res.json(aereopuertos);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const aereopuertos = await pool.query('SELECT * FROM aereopuerto WHERE idaereopuerto = ?',[id]);
        if (aereopuertos.length>0){
            return res.json(aereopuertos);
        }
        res.status(404).json({text:"aereopuerto doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO aereopuerto set?',[req.body])
        res.json({message:'aereopuerto saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE aereopuerto set ? WHERE idaereopuerto = ?',[req.body,id])
        res.json({message:'aereopuerto was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM aereopuerto WHERE idaereopuerto = ?',[id])
        res.json({message:'aereopuerto was deleted'});
    }
}

export  const aereopuertosController = new AereopuertosController();