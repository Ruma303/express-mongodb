const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

//* Variabili d'ambiente
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;
const DB_HOST_LOCAL = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}` || `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

//app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});


//% Connessione locale a MongoDB
const localMongo = new MongoClient(DB_HOST_LOCAL);

async function run() {
    try {
        await localMongo.connect();
        console.log(`Connesso al database locale ${DB_NAME}`);
    } finally {
        await localMongo.close();
    }
}
run().catch(console.dir);


//% Connessione MongoDB su Atlas
const DB_HOST_ATLAS = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@ruma-mongodb.dxkpv97.mongodb.net/?retryWrites=true&w=majority`;
/* const client = new MongoClient(DB_HOST_ATLAS || DB_HOST_LOCAL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Connesso a MongoDB Locale");
    } finally {
        await client.close();
    }
}
run().catch(console.dir); */
