const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory');

// Define routes
router.post('/', inventoryController.create);
router.get('/', inventoryController.getAll);
router.get('/:id', inventoryController.getOne);
router.put('/:id', inventoryController.update);
router.delete('/:id', inventoryController.delete);

module.exports = router;
