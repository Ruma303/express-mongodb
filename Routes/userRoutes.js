const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

module.exports = router
    .get('/', userController.index)
    .get('/age', userController.getUsersByAge)
    .get('/name', userController.getUsersSortedByName)
    .get('/above-age', userController.countUsersAboveAge)
    .get('/email', userController.updateUserEmail)