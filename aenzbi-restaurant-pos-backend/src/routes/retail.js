const express = require('express');
const router = express.Router();
const retailController = require('../controllers/retail');

// Define routes
router.post('/', retailController.create);
router.get('/', retailController.getAll);
router.get('/:id', retailController.getOne);
router.put('/:id', retailController.update);
router.delete('/:id', retailController.delete);

module.exports = router;
