const express = require('express');
const bodegaController = require('../controllers/BodegaController');
const router = express.Router();

router.post('/bodegas', bodegaController.create);
router.get('/bodegas', bodegaController.getAll);
router.get('/bodegas/:id', bodegaController.getById);
router.put('/bodegas/:id', bodegaController.update);
router.delete('/bodegas/:id', bodegaController.delete);

module.exports = router;
