const express = require('express');
const promocionController = require('../controllers/PromocionController');
const router = express.Router();

router.post('/promociones', promocionController.create);
router.get('/promociones', promocionController.getAll);
router.get('/promociones/:id', promocionController.getById);
router.put('/promociones/:id', promocionController.update);
router.delete('/promociones/:id', promocionController.delete);

module.exports = router;
