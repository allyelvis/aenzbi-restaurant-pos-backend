const express = require('express');
const router = express.Router();
const itemMenuController = require('../controllers/itemMenu');

// Define routes
router.post('/', itemMenuController.create);
router.get('/', itemMenuController.getAll);
router.get('/:id', itemMenuController.getOne);
router.put('/:id', itemMenuController.update);
router.delete('/:id', itemMenuController.delete);

module.exports = router;
