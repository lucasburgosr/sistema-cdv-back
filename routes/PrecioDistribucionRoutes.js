const express = require('express');
const precioDistribucionController = require('../controllers/PrecioDistribucionController');
const router = express.Router();

router.post('/precio-distribucion', precioDistribucionController.create);
router.get('/precio-distribucion', precioDistribucionController.getAll);
router.get('/precio-distribucion/:id', precioDistribucionController.getById);
router.put('/precio-distribucion/:id', precioDistribucionController.update);
router.delete('/precio-distribucion/:id', precioDistribucionController.delete);

module.exports = router;
