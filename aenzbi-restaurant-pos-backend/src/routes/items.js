const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/items');

// Define routes
router.post('/', itemsController.create);
router.get('/', itemsController.getAll);
router.get('/:id', itemsController.getOne);
router.put('/:id', itemsController.update);
router.delete('/:id', itemsController.delete);

module.exports = router;
