const express = require('express');
const router = express.Router();
const taxesController = require('../controllers/taxes');

// Define routes
router.post('/', taxesController.create);
router.get('/', taxesController.getAll);
router.get('/:id', taxesController.getOne);
router.put('/:id', taxesController.update);
router.delete('/:id', taxesController.delete);

module.exports = router;
