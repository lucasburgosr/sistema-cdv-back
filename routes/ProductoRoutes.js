const express = require('express');
const productoController = require('../controllers/ProductoController');
const router = express.Router();

router.post('/productos', productoController.create);
router.get('/productos', productoController.getAll);
router.get('/productos/:id', productoController.getById);
router.put('/productos/:id', productoController.update);
router.delete('/productos/:id', productoController.delete);

module.exports = router;
