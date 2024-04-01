const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const secretKeyENV = 'secretKey';

//const controllerUser = require('../controllers/user');
//X-API-Key

router.post('/', async function(req, res, next) {
    /**
     * la idea es que se logue con un api key y con un usuario y contraseña
     * donde si esta todo bien devolvera un cuerpo con un true y un api key, esta api key se consume un servicio
     * donde devolvera un token y con este token es que se va poder consumir todos los servicios restantes
     */
    console.log(req.headers['x-api-key']);
    if(req.headers['x-api-key']) {// es fija para el front pero hay que cambiarla cada cierto tiempo
        let nickName = req.body.nickName;
        let password = req.body.password;

        const apiKey = crypto.randomUUID()

        res.send({
            api: apiKey
        });
        
    } else {
        res.status(400);
        res.send('Authorization denegada');
    }
});

router.post('/getToken', async function(req, res, next) {
    /**
     * la idea es que se logue con un api key y con un usuario y contraseña
     * donde si esta todo bien devolvera un cuerpo con un true y un api key, esta api key se consume un servicio
     * donde devolvera un token y con este token es que se va poder consumir todos los servicios restantes
     */
    
    const dbApiKey = 'asd21qweqwrqer';//tabla de login
    console.log(req.headers['x-api-key']);
    if(req.headers['x-api-key'] && req.headers['x-api-key'] == dbApiKey) {// es fija para el front pero hay que cambiarla cada cierto tiempo
        res.send({
            Bearer: jwt.sign({
                user: 'usuario',
            }, secretKeyENV, { expiresIn: '1h' }),
        });
    } else {
        res.status(400);
        res.send('Authorization denegada');
    }
});




module.exports = router;