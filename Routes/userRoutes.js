const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

module.exports = router
    .get('/', userController.getAllUsers)
    .get('/:id', userController.getUser);