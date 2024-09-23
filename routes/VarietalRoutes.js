const express = require('express');
const varietalController = require('../controllers/VarietalController');
const router = express.Router();

router.post('/varietales', varietalController.create);
router.get('/varietales', varietalController.getAll);
router.get('/varietales/:id', varietalController.getById);
router.put('/varietales/:id', varietalController.update);
router.delete('/varietales/:id', varietalController.delete);

module.exports = router;
