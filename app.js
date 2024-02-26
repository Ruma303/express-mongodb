const express = require('express'), mongoose = require('mongoose'),
app = express(), path = require('path');

//, Settaggio APP
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'mongoose';

app.set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

//, Importazione Rotte
const userRoutes = require('./Routes/userRoutes');
app.use(userRoutes);




//% Connessione a MongoDB tramite Mongoose
//# Usando then() e catch()
/* mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`)
.then(() => console.log(`Connessione al database ${DB_NAME} riuscita`))
.catch(err => console.error('Errore di connessione al database:', err)); */

//# Usando async e await
(async function run() {
    try {
        await mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`);
        console.log(`Connessione al database ${DB_NAME} riuscita`);
        app.listen(PORT, () => console.log(`Backend attivo sulla porta ${PORT}`));
    } catch (err) {
        console.error('Errore di connessione al database:', err);
    }
})()
