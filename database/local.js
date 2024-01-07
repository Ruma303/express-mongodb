//* Variabili d'ambiente
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME;
const DB_HOST_LOCAL = `mongodb://127.0.0.1:${DB_PORT}/${DB_NAME}`;

//? Connessione locale a MongoDB
const localMongo = new MongoClient(DB_HOST_LOCAL);

module.exports = {
    connectToServer: async () => {
        try {
            await localMongo.connect();
            console.log(`Connesso al database locale ${DB_NAME}`);
        } catch (err) {
            console.error(err);
            process.exit();
        }
    },
};