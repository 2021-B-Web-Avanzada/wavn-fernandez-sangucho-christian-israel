const {Router} = require("express");
const router =Router();
const _u = require('underscore');

const aereolineas = require('../aereolineas.json');
const {each} = require("underscore");

router.get('/', (req, res)=>{
    res.json(aereolineas);
});

router.post('/', (req, res)=>{
    const {aereopuerto, name, destino, hora}= req.body;
    if (aereopuerto && name && destino && hora) {
        const id = aereolineas.length + 1;
        const newAereolineas = {...req.body, id};
        aereolineas.push(newAereolineas);
        res.json(aereolineas);
    }else{
        res.json('wrong required');
    }

});

router.put('/:id',(req,res) =>{
    let id = req.params.id;
    const {aereopuerto, name, destino, hora} = req.body;
    if (aereopuerto && name && destino && hora){
        each(aereolineas,(aereolineas, i) =>{
            if(aereolineas.id == id) {
                aereolineas.name = aereopuerto;
                aereolineas.city = name;
                aereolineas.phone = destino;
                aereolineas.type = hora;

            }
        });
    }
});

router.delete('/:id',(req, res)=>{
    let id = req.params.id;
    each(aereolineas,(aereolineas, i) => {
        if (aereolineas.id == id){
            aereolineas.splice(i,1);
        }

    });
});

module.exports = router;