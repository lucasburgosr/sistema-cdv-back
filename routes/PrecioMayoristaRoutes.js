const express = require('express');
const precioMayoristaController = require('../controllers/PrecioMayoristaController');
const router = express.Router();

router.post('/precio-mayorista', precioMayoristaController.create);
router.get('/precio-mayorista', precioMayoristaController.getAll);
router.get('/precio-mayorista/:id', precioMayoristaController.getById);
router.put('/precio-mayorista/:id', precioMayoristaController.update);
router.delete('/precio-mayorista/:id', precioMayoristaController.delete);

module.exports = router;
