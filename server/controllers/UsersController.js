const User = require('../models/User');
const { paramsBuilder } = require('../helpers/index');
const UsersController = {}

const validParams = ['firstName','lastName','username','email'];

UsersController.create = (req,res) => {
    const params = paramsBuilder(validParams,req.body);
    User.create(params)
    .then(usr => res.status(200).json({user:usr}))
    .catch(error => res.status(422).json({error,params}));
}

UsersController.delete = (req,res) => {

    if(!req.body.id)
    res.status(400).json({error:'Falta el atributo id'});

    User.findByIdAndRemove(req.body.id)
    .then(result => {
        if(result)
        res.json({message:'Usuario eliminado correctamente',result})
        else
        res.status(400).json({message:`No se encontro el usuario id:${req.body.id}`,id:req.body.id})
    })
    .catch(err =>  res.status(400).json({err}));
}

UsersController.index = (req,res) => {
    User.find()
    .then(users => res.json({users}))
    .catch(error => res.status(400).json(error));
}

UsersController.update = (req,res) => {
    
    const params = paramsBuilder(validParams,req.body);
    User.findByIdAndUpdate(req.params.id,params,{new:true})
    .then(usr => res.status(200).json({user:usr}))
    .catch(error => res.status(422).json({error,params}));

}

module.exports = UsersController
