const express = require('express');
const router = express.Router();
const postController = require('../Controllers/postController');

module.exports = router
    .get('/', postController.getAllPosts)