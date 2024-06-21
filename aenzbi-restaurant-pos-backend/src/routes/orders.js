const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');

// Define routes
router.post('/', ordersController.create);
router.get('/', ordersController.getAll);
router.get('/:id', ordersController.getOne);
router.put('/:id', ordersController.update);
router.delete('/:id', ordersController.delete);

module.exports = router;
