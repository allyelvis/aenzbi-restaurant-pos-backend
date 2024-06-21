const express = require('express');
const router = express.Router();
const suppliersController = require('../controllers/suppliers');

// Define routes
router.post('/', suppliersController.create);
router.get('/', suppliersController.getAll);
router.get('/:id', suppliersController.getOne);
router.put('/:id', suppliersController.update);
router.delete('/:id', suppliersController.delete);

module.exports = router;
