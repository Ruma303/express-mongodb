const { MongoClient } = require('mongodb');

require('dotenv').config();
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;
const DB_HOST_LOCAL = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`;

//* Creare un'istanza di MongoClient
const localMongo = new MongoClient(DB_HOST_LOCAL);

async function connectToDatabase() {
    try {
        await localMongo.connect();
        console.log(`Connesso al database locale ${DB_NAME}`);
    } catch (err) {
        console.error(err);
        process.exit();
    }
}

//* Esportare sia localMongo che connectToDatabase
module.exports = { localMongo, connectToDatabase };