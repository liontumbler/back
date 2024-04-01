const jwt = require('jsonwebtoken');

const secretKeyENV = 'secretKey';
const middlewareAut = function (req, res, next) {
    console.log('???', (req.headers && req.headers.authorization), req.headers, req.headers.authorization);
    if (req.headers && req.headers.authorization) {

        const partesToken = req.headers.authorization.split(' ');
        if(partesToken[0] == 'Bearer') {
            try {
                res.user = jwt.verify(token, secretKey);
                console.log("Token decodificado:", res);
                console.log("user:", res.user);
                next();
            } catch (err) {
                res.status(400);
                res.send('Authorization denegada');
            }
        } else {
            res.status(400);
            res.send('Authorization denegada');
        }
    } else {
        console.log('error xxx');
        res.status(400);
        res.send('Authorization denegada');
    }
}

module.exports = middlewareAut;