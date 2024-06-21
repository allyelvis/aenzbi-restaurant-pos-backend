const express = require('express');
const router = express.Router();
const salesController = require('../controllers/sales');

// Define routes
router.post('/', salesController.create);
router.get('/', salesController.getAll);
router.get('/:id', salesController.getOne);
router.put('/:id', salesController.update);
router.delete('/:id', salesController.delete);

module.exports = router;
