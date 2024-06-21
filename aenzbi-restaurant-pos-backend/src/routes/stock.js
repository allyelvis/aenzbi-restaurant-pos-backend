const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stock');

// Define routes
router.post('/', stockController.create);
router.get('/', stockController.getAll);
router.get('/:id', stockController.getOne);
router.put('/:id', stockController.update);
router.delete('/:id', stockController.delete);

module.exports = router;
