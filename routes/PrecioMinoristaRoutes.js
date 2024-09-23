const express = require('express');
const precioMinoristaController = require('../controllers/PrecioMinoristaController');
const router = express.Router();

router.post('/precio-minorista', precioMinoristaController.create);
router.get('/precio-minorista', precioMinoristaController.getAll);
router.get('/precio-minorista/:id', precioMinoristaController.getById);
router.put('/precio-minorista/:id', precioMinoristaController.update);
router.delete('/precio-minorista/:id', precioMinoristaController.delete);

module.exports = router;
