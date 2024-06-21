const express = require('express');
const router = express.Router();
const accountingController = require('../controllers/accounting');

// Define routes
router.post('/', accountingController.create);
router.get('/', accountingController.getAll);
router.get('/:id', accountingController.getOne);
router.put('/:id', accountingController.update);
router.delete('/:id', accountingController.delete);

module.exports = router;
