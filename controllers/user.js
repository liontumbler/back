
const User = require('../models/User.js');

class controllerUser {
    async allUsers(req, res, next) {
        //console.log(users, Array.isArray(users));
        //console.log(req.body);
        console.log(req.hostname);
        console.log(req.ip);
        
        const users = await User.readUsers();
        res.send(users);
    }

    async userId(req, res, next) {
        const users = await User.readUser({ _id: req.params.id });
        res.send(users);
    }

    async guardarUser(req, res, next) {
        const users = await User.createUser(req.body)
        if (users && users.code && users.code == 11000) {
            res.status(404);
            res.send({
                //code: users.code,
                msg: `el campo con valor ${JSON.stringify(users.keyValue)} ya existe`
            });
        } else {
            res.send(users);
        }
    }

    async eliminarUserId(req, res, next) {
        const users = await User.deleteUsers({ _id: req.params.id });
        res.send({
            rowsAfect: users
        });
    }

    async actualizarUserId(req, res, next) {
        const users = await User.updateUsers({ _id: req.params.id }, req.body);
        res.send({
            rowsAfect: users
        });
    }
}

module.exports = new controllerUser();