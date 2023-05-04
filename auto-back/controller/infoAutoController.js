const  MarcasAutos = require('../model/modelosList');

module.exports = {


    getModel: (req, res) => {
        let marca = req.body.marca;
        res.send('You are Authorized!')
    },

    getMarcas: (req, res) => {
        res.send(MarcasAutos)
    }
}