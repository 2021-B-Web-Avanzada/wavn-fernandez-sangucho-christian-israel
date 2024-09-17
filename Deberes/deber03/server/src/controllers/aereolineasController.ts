import {Request,Response} from 'express';
import pool from '../database'
class AereolineasController{
    public async list (req: Request,res:Response) {
        const aereolineas = await pool.query('SELECT * FROM aereolinea');
        res.json(aereolineas);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const aereolineas = await pool.query('SELECT * FROM aereolinea WHERE idaereolinea = ?',[id]);
        if (aereolineas.length>0){
            return res.json(aereolineas);
        }
        res.status(404).json({text:"aereopuerto doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO aereolinea set?',[req.body])
        res.json({message:'aereolinea saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE aereolinea set ? WHERE idaereolinea = ?',[req.body,id])
        res.json({message:'aereolinea was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM aereolinea WHERE idaereolinea = ?',[id])
        res.json({message:'aereolinea was deleted'});
    }
}

export  const aereolineasController = new AereolineasController();