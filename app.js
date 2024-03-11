const express = require('express');
const app = express();
const { connectToDatabase, localMongo } = require('./database/local');
const { connectToAtlas, atlas } = require('./database/atlas');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'mongoose';


//% Connessione MongoDB locale
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server in ascolto sulla porta ${PORT}`);
    });
}).catch(err => {
    console.error("Impossibile connettersi al database:", err);
    process.exit(1);
});


//, Testare connessione locale
app.get('/', async (req, res) => {
    try {
        const db = localMongo.db(DB_NAME);
        const collection = db.collection('users');
        const documents = await collection.find({}).toArray();
        res.json(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send('Errore durante la lettura dei dati');
    }
});


//% Connessione MongoDB Atlas
/* connectToAtlas().then(() => {
    app.listen(PORT, () => {
        console.log(`Server in ascolto sulla porta ${PORT}`);
    });
}).catch(err => {
    console.error("Impossibile connettersi a MongoDB Atlas:", err);
    process.exit(1);
}); */


//, Testare connessione atlas
/* app.get('/users', async (req, res) => {
    try {
        const db = atlas.db(DB_NAME);
        const collection = db.collection('users');
        const documents = await collection.find({}).toArray();
        res.send(documents);
    } catch (err) {
        console.error(err);
        res.status(500).send('Errore durante la lettura dei dati');
    }
}); */