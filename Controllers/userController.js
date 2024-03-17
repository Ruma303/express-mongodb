const User = require('../Models/User');

const getUsersByAge = async () => {
    try {
        const users = await User.find({ age: { $gte: 20, $lte: 30 } }).select('email');
        console.log(users);
    } catch (err) {
        throw err;
    }
};
const getUsersSortedByName = async () => {
    try {
        const users = await User.find().sort('name');
        console.log(users);
    } catch (err) {
        throw err;
    }
};
const countUsersAboveAge = async () => {
    try {
        const count = await User.countDocuments({ age: { $gt: 20 } });
        console.log('Numero di utenti con più di 20 anni:', count);
    } catch (err) {
        throw err;
    }
};

const updateUserEmail = async () => {
    try {
        const result = await User.updateOne({ name: 'John Doe' }, { email: 'john.doe@example.com' });
        console.log(result);
    } catch (err) {
        throw err;
    }
};

module.exports = { getUsersByAge, getUsersSortedByName, countUsersAboveAge, updateUserEmail };