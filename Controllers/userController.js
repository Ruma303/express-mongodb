const User = require('../Models/User');

exports.getUserByName = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.params.name });
        if (!user) {
            return res.status(404).send('Utente non trovato');
        }
        res.render('user', { user });
    } catch (err) {
        return next(err);
    }
};