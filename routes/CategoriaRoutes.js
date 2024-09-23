const express = require('express');
const categoriaController = require('../controllers/CategoriaController');
const router = express.Router();

router.post('/categorias', categoriaController.create);
router.get('/categorias', categoriaController.getAll);
router.get('/categorias/:id', categoriaController.getById);
router.put('/categorias/:id', categoriaController.update);
router.delete('/categorias/:id', categoriaController.delete);

module.exports = router;
