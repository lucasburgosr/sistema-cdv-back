const express = require('express');
const precioBuenosAiresController = require('../controllers/PrecioBuenosAiresController');
const router = express.Router();

router.post('/precio-buenosaires', precioBuenosAiresController.create);
router.get('/precio-buenosaires', precioBuenosAiresController.getAll);
router.get('/precio-buenosaires/:id', precioBuenosAiresController.getById);
router.put('/precio-buenosaires/:id', precioBuenosAiresController.update);
router.delete('/precio-buenosaires/:id', precioBuenosAiresController.delete);

module.exports = router;
