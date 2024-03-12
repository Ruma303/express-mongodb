const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

module.exports = router
    .get('/', userController.index)
    .get('/create', userController.create)
    .post('/', userController.store)
    .get('/:id', userController.show)
    .get('/:id/edit', userController.edit)
    .put('/:id', userController.update)
    .delete('/:id', userController.destroy);