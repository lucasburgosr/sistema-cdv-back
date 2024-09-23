const express = require('express');
const precioMercadoLibreController = require('../controllers/PrecioMercadoLibreController');
const router = express.Router();

router.post('/precio-mercadolibre', precioMercadoLibreController.create);
router.get('/precio-mercadolibre', precioMercadoLibreController.getAll);
router.get('/precio-mercadolibre/:id', precioMercadoLibreController.getById);
router.put('/precio-mercadolibre/:id', precioMercadoLibreController.update);
router.delete('/precio-mercadolibre/:id', precioMercadoLibreController.delete);

module.exports = router;
