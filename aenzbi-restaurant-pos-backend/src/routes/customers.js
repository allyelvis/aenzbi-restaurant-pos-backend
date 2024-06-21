const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers');

// Define routes
router.post('/', customersController.create);
router.get('/', customersController.getAll);
router.get('/:id', customersController.getOne);
router.put('/:id', customersController.update);
router.delete('/:id', customersController.delete);

module.exports = router;
