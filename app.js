const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME;

//* Creare una nuova istanza MongoClient
const localMongo = new MongoClient('mongodb://127.0.0.1:27017/' + DB_NAME);

async function connectToDatabase() {
    await localMongo.connect();
    console.log(`Connesso al database locale ${DB_NAME}`);
}

//* Avviare la connessione al database prima di avviare il server Express
connectToDatabase();
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});



app.get('/test-insert', async (req, res) => {
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