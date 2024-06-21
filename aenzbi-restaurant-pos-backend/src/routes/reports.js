const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reports');

// Define routes
router.post('/', reportsController.create);
router.get('/', reportsController.getAll);
router.get('/:id', reportsController.getOne);
router.put('/:id', reportsController.update);
router.delete('/:id', reportsController.delete);

module.exports = router;
