const express = require('express');
const router = express.Router();

const userController = require('../controllers/contacts');

router.get('/:id', userController.getSingle);
router.get('/', userController.getAll);

module.exports = router;