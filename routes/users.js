const express = require('express');
const router = express.Router();

const controllerUser = require('../controllers/user');
const middlewareAut = require('../middleware/middlewareAut');

router.use(middlewareAut);

router.get('/', controllerUser.allUsers);
router.get('/:id', controllerUser.userId);
router.post('/', controllerUser.guardarUser);
router.delete('/:id', controllerUser.eliminarUserId);
router.put('/:id', controllerUser.actualizarUserId);

module.exports = router;