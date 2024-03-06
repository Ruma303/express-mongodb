    const User = require('../Models/User');

    // Mostra tutti gli utenti
    const index = async (req, res, next) => {
        try {
            const users = await User.find({});
            res.json(users);
        } catch (err) {
            next(err);
        }
    };

    // Mostrare singolo utente
    const show = async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: `Utente con ID ${req.params.id} non trovato` });
            }
            res.json(user);
        } catch (err) {
            next(err);
        }
    };

    // Creare nuovo utente
    const store = async (req, res, next) => {
        try {
            const newUser = new User({
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: req.body.password
            });
            const user = await newUser.save();
            res.status(201).json(user);
        } catch (err) {
            next(err);
        }
    };

    // Aggiornare utente
    const update = async (req, res, next) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                name: req.body.name,
                age: req.body.age,
                email: req.body.email,
                password: req.body.password
            }, { new: true });
            if (!user) {
                return res.status(404).json({ message: `Utente con ID ${req.params.id} non trovato` });
            }
            res.json(user);
        } catch (err) {
            next(err);
        }
    };

    // Eliminare utente
    const destroy = async (req, res, next) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) {
                return res.status(404).json({ message: `Utente con ID ${req.params.id} non trovato` });
            }
            res.status(204).end();
        } catch (err) {
            next(err);
        }
    };

    module.exports = { index, show, store, update, destroy };