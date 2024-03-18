const express = require('express'), mongoose = require('mongoose'),
      app = express(), path = require('path');

const session = require('express-session');


//, Settaggio APP
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'mongoose';
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';

app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('trust proxy', 1)
    .use(session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    }))
    /* .use((res, req, next) => {
        console.log(res.locals)
        res.locals.message = req.session.message;
        delete req.session.message;
        next();
    }) */


//, Rotte
app.get('/', (req, res) => {
    res.render('home');
});
const userRoutes = require('./Routes/userRoutes');app.use('/users', userRoutes);


//% Connessione a MongoDB tramite Mongoose
(async function run() {
    try {
        await mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`);
        console.log(`Connessione al database ${DB_NAME} riuscita`);
        app.listen(PORT, () => console.log(`Backend attivo sulla porta ${PORT}`));
    } catch (err) {
        console.error('Errore di connessione al database:', err);
    }
})()
