const express = require('express');
const app = express();
const { connectToDatabase, localMongo } = require('./database/local');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'expMongo';

//! Avviare la connessione al database PRIMA di avviare il server Express
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server in ascolto sulla porta ${PORT}`);
    });
}).catch(err => {
    console.error("Impossibile connettersi al database:", err);
    process.exit(1);
});


//% Testare connessione
app.post('/test-insert', async (req, res) => {
    try {
        const db = localMongo.db(DB_NAME);
        const collection = db.collection('testCollection');
        const insertResult = await collection.insertOne({ testField: 'testValue' });
        res.send(insertResult);
    } catch (err) {
        console.error(err);
        res.status(500).send('Errore durante l\'inserimento dei dati');
    }
});


app.get('/test-read', async (req, res) => {
    try {
        const db = localMongo.db(DB_NAME);
        const collection = db.collection('testCollection');
        const documents = await collection.find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send('Errore durante la lettura dei dati');
    }
});