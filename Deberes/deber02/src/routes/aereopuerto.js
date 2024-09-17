const {Router} = require("express");
const router =Router();
const _u = require('underscore');

const aereopuetos = require('../aereopuertos.json');
const {each} = require("underscore");

router.get('/', (req, res)=>{
    res.json(aereopuetos);
});

router.post('/', (req, res)=>{
    const {name, city, phone, type}= req.body;
    if (name && city && phone && type) {
        const id = aereopuetos.length + 1;
        const newAereopuerto = {...req.body, id};
        aereopuetos.push(newAereopuerto);
        res.json(aereopuetos);
    }else{
        res.json('wrong required');
    }

});

router.put('/:id',(req,res) =>{
   let id = req.params.id;
   const {name,city,phone,type} = req.body;
   if (name && city && phone && type){
       each(aereopuetos,(aerepuerto, i) =>{
           if(aerepuerto.id == id) {
               aerepuerto.name = name;
               aerepuerto.city = city;
               aerepuerto.phone = phone;
               aerepuerto.type = type;

           }
       });
   }
});

router.delete('/:id',(req, res)=>{
    let id = req.params.id;
    each(aereopuetos,(aereopuerto, i) => {
        if (aereopuerto.id == id){
            aereopuetos.splice(i,1);
        }

    });
});

module.exports = router;