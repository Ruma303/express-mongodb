const express = require('express'), mongoose = require('mongoose'),
app = express(), path = require('path');

//, Settaggio APP
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'mongoose';

app.use(express.json())
    .use(express.urlencoded({ extended: true }));

//, Importazione Rotte
const bookRoutes = require('./Routes/bookRoutes');
app.use('/books', bookRoutes);

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
