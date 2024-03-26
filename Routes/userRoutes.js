const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

module.exports = router
    .get('/query1', userController.query1)
    .get('/query2', userController.query2);