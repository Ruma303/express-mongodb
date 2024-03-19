const express = require('express');
const router = express.Router();
const bookController = require('../Controllers/bookController');

module.exports = router
    .get('/', bookController.getAllBooks)