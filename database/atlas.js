const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');

//* Variabili d'ambiente
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;
const DB_HOST_LOCAL = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}` || `mongodb://localhost:${DB_PORT}/${DB_NAME}`;


//app.use(express.json());
app.listen(PORT, () => {
    console.log(`Server in ascolto sulla porta ${PORT}`);
});


//% Connessione MongoDB su Atlas
/* `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@ruma-mongodb.dxkpv97.mongodb.net/?retryWrites=true&w=majority`; */
/* const DB_HOST_ATLAS = 'mongodb+srv://ruma:HEgjN1tdEdqkEYq2@ruma-mongodb.dxkpv97.mongodb.net/?retryWrites=true&w=majority' */

const DB_USERNAME = encodeURIComponent(process.env.DB_USERNAME);
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const DB_HOST_ATLAS = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@ruma-mongodb.dxkpv97.mongodb.net/?retryWrites=true&w=majority`;


const atlas = new MongoClient(DB_HOST_ATLAS, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
async function run() {
    try {
        await atlas.connect();
        await atlas.db("admin").command({ ping: 1 });
        console.log("Connesso a MongoDB Atlas");
    } finally {
        await atlas.close();
    }
}
run().catch(console.dir);

