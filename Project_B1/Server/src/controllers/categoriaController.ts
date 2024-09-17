import {Request,Response} from 'express';
import pool from '../database'
class CategoriaController{
    public async list (req: Request,res:Response) {
        const categoria = await pool.query('SELECT * FROM categoria');
        res.json(categoria);
    }
    public async getOne (req:Request,res:Response){
        const {id} = req.params;
        const categoria = await pool.query('SELECT * FROM categoria WHERE idCategoria = ?',[id]);
        if (categoria.length>0){
            return res.json(categoria);
        }
        res.status(404).json({text:"Categoria doesn't exists"});
    }
    public async create (req: Request,res:Response){
        await pool.query('INSERT INTO categoria set?',[req.body])
        res.json({message:'categoria saved'});
    }
    public async update (req:Request,res:Response){
        const {id} = req.params
        await pool.query('UPDATE categoria set ? WHERE idCategoria = ?',[req.body,id])
        res.json({message:'categoria was updated'});
    }
    public async delete (req:Request,res:Response){
        const {id} = req.params;
        await pool.query('DELETE FROM categoria WHERE idCategoria = ?',[id])
        res.json({message:'Categoria was deleted'});
    }
}

export  const categoriaController = new CategoriaController();