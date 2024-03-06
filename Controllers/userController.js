const User = require('../Models/User');

// Mostra tutti gli utenti
index = async (req, res, next) => {
    try {
        const users = await User.find({});
        if (!users) {
            return res.status(404).send('Utenti non trovati');
        }
        res.render('index', { users });
    } catch (err) {
        return next(err);
    }
}

// Mostrare singolo utente
show = async (req, res, next) => {
    try {
        const user = await User.findOne({ name: req.params.name });
        if (!user) {
            return res.status(404).send(`Utente ${user} non trovato`);
        }
        res.render('user', { user });
    } catch (err) {
        return next(err);
    }
};

// Creare nuovo utente
create = (req, res) => {
    res.render('create');
};


// Creare nuovo utente
store = async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        return next(err);
    }
};

// Creare nuovo utente
edit = (req, res) => {
    res.render('edit');
};

// Aggiornare utente
update = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate({ name: req.params.name }, req.body, { new: true });
        res.status(200).send('Utente aggiornato');
    } catch (err) {
        return next(err);
    }
}

// Eliminare utente
destroy = async (req, res, next) => {
    try {
        const user = await User.findOneAndDelete({ name: req.params.name });
        res.status(204).send('Utente eliminato');
    } catch (err) {
        return next(err);
    }
}

module.exports = { index, show, store, create, edit, update, destroy };