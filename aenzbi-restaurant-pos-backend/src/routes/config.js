const express = require('express');
const router = express.Router();
const configController = require('../controllers/config');

// Define routes
router.post('/', configController.create);
router.get('/', configController.getAll);
router.get('/:id', configController.getOne);
router.put('/:id', configController.update);
router.delete('/:id', configController.delete);

module.exports = router;
