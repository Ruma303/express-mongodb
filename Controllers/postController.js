const Post = require('../Models/Post');

const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        next(err);
    }
}

const getPost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        next(err);
    }
}

module.exports = { getAllPosts, getPost };