const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Define routes
router.post('/', usersController.create);
router.get('/', usersController.getAll);
router.get('/:id', usersController.getOne);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

module.exports = router;
