const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const User = require('../Models/User');

router
    // Logica di richiesta direttamente nella rotta
    .get('/users', async (req, res, next) => {
        try {
            const users = await User.find({});
            if (!users) {
                return res.status(404).send('Utenti trovati');
            }
            res.json(users);
        } catch (err) {
            res.json({ message: err })
            //return next(err);
        }
    })
    // Delegare la logica nei controller
    .get('/users/:name', userController.getUserByName);

module.exports = router;