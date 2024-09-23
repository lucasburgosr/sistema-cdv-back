const express = require('express');
const precioSobremesaController = require('../controllers/PrecioSobremesaController');
const router = express.Router();

router.post('/precio-sobremesa', precioSobremesaController.create);
router.get('/precio-sobremesa', precioSobremesaController.getAll);
router.get('/precio-sobremesa/:id', precioSobremesaController.getById);
router.put('/precio-sobremesa/:id', precioSobremesaController.update);
router.delete('/precio-sobremesa/:id', precioSobremesaController.delete);

module.exports = router;
