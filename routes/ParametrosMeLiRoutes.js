const express = require('express');
const parametrosMeLiController = require('../controllers/ParametrosMeLiController');
const router = express.Router();

router.post('/parametros-ml', parametrosMeLiController.create);
router.get('/parametros-ml', parametrosMeLiController.getAll);
router.get('/parametros-ml/:id', parametrosMeLiController.getById);
router.put('/parametros-ml/:id', parametrosMeLiController.update);
router.delete('/parametros-ml/:id', parametrosMeLiController.delete);

module.exports = router;
