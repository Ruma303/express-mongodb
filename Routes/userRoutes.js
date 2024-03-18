const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

module.exports = router
    .get('/', userController.index)
    .post('/', userController.store)
    .get('/:id', userController.show)
    .put('/:id', userController.update)
    .delete('/:id', userController.destroy);