const User = require('../Models/User');

const getAllUsers = async (req, res, next) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id, "name email");
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}

module.exports = { getAllUsers, getUser };