const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const userCtl = require('../controller/userController.js');
const infoAutoCtl = require('../controller/infoAutoController.js');
const chatCtl = require('../controller/chatController.js');



//Middleware para verificar el token
function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader;
    if (token == null) return res.sendStatus(403);
    jwt.verify(token, "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}


router.get('/api/testing', (req, res) => {
    res.send('Hello World!, Prueba correcta');
});
//Sign up
router.post('/api/signup', userCtl.singUp);

//Rutas protegidas
router.get('/api/modelos', verifyToken, infoAutoCtl.getModel )
router.get('/api/marcas', verifyToken, infoAutoCtl.getMarcas )
router.post('/queryChat',verifyToken, chatCtl.chatConsultModel)

module.exports = router;