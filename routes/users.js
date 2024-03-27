var express = require('express');
var router = express.Router();

const controllerUser = require('../controllers/user');


const middlewareAut = function (req, res, next) {
  console.log('???', (req.headers && req.headers.authorization), req.headers, req.headers.authorization);
  if (req.headers && req.headers.authorization) {
    //validar la autorizacion 
    //Authorization
    //Bearer
    next();
  } else {
    console.log('error xxx');
    res.status(400);
    res.send('Authorization denegada');
  }
}

router.use(middlewareAut)

router.get('/', async function (req, res, next) {
  const users = await controllerUser.readUsers()
  //console.log(users, Array.isArray(users));
  res.send(users);
});

router.get('/:id', async function (req, res, next) {
  console.log(req.ip);
  const users = await controllerUser.readUser({ _id: req.params.id });
  res.send(users);
});

router.post('/', async function (req, res, next) {
  const users = await controllerUser.createUser(req.body)
  if (users && users.code && users.code == 11000) {
    res.status(404);
    //res.send(`el campo con valor ${JSON.stringify(users.keyValue)} ya existe`);
    res.send({
      //code: users.code,
      msg: `el campo con valor ${JSON.stringify(users.keyValue)} ya existe`
    });
  } else {
    res.send(users);
  }
});

router.delete('/:id', async function (req, res, next) {
  const users = await controllerUser.deleteUsers({ _id: req.params.id });
  res.send({
    rowsAfect: users
  });
});

router.put('/:id', async function (req, res, next) {
  console.log(req.ip, req.body);
  const users = await controllerUser.updateUsers({ _id: req.params.id }, req.body);
  res.send({
    rowsAfect: users
  });
});



module.exports = router;
