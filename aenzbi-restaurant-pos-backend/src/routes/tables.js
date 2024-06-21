const express = require('express');
const router = express.Router();
const tablesController = require('../controllers/tables');

// Define routes
router.post('/', tablesController.create);
router.get('/', tablesController.getAll);
router.get('/:id', tablesController.getOne);
router.put('/:id', tablesController.update);
router.delete('/:id', tablesController.delete);

module.exports = router;
