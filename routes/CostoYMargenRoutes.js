const express = require('express');
const costoYMargenController = require('../controllers/CostoYMargenController');
const router = express.Router();

router.post('/costoymargen', costoYMargenController.create);
router.get('/costoymargen', costoYMargenController.getAll);
router.get('/costoymargen/:id', costoYMargenController.getById);
router.put('/costoymargen/:id', costoYMargenController.update);
router.delete('/costoymargen/:id', costoYMargenController.delete);
router.patch('/costoymargen/multiple-update', costoYMargenController.updateMultiple)
router.patch('/costoymargen/completar-precios-ml', costoYMargenController.completarPreciosMercadoLibre)

module.exports = router;
