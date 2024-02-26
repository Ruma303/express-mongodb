    const { MongoClient, ServerApiVersion } = require('mongodb');
    require('dotenv').config();
    const DB_USERNAME = encodeURIComponent(process.env.DB_USERNAME);
    const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
    const DB_NAME = encodeURIComponent(process.env.DB_NAME);
    const DB_ATLAS = encodeURIComponent(process.env.DB_ATLAS);
    const ATLAS_DRIVER = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_ATLAS}.dxkpv97.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
    console.log(ATLAS_DRIVER);

    const atlas = new MongoClient(ATLAS_DRIVER, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    async function connectToAtlas() {
        try {
            await atlas.connect();
            console.log("Connesso a MongoDB Atlas");
            //* Ritorniamo la connessione al database Atlas
            return atlas.db(DB_NAME);
        } catch (err) {
            console.error("Errore durante la connessione a MongoDB Atlas:", err);
            process.exit(1);
        }
    }

    //* Esportare la funzione di connessione e il client MongoDB
    module.exports = { connectToAtlas, atlas };


