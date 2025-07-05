const express = require('express');
const router = express.Router();
router.use(express.json());

const userController = require('../controllers/contacts');

// GET 
router.get('/:id', userController.getSingle);
router.get('/', userController.getAll);

// POST 
router.post('/', userController.createContact);

// PUT 
router.put('/:id', userController.updateContact);

// DELETE 
router.delete('/:id', userController.deleteContact);

module.exports = router;