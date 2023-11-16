
// --- Importar express ----
import express from "express";

// importar dotenv
import dotenv from "dotenv";

import { connectDB } from "./config/database.js";

dotenv.config();


// --- Crear servidor express ---
const app = express();


// --- Configurar el servidor para recibir JSON ---
const PORT = process.env.PORT


// --- Llamar a la base de datos ---

const MongoURI = process.env.MONGO_URI;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

/*
app.listen(() => {
    connectDB(MongoURI);
    console.log("Connected to DB");
    console.log(`Server running on port ${PORT}`);
})
*/

const startServer = async () => {

    try{
        await connectDB(MongoURI);
        console.log("Connected to DB");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    } catch(error) {
        console.log(error);
    }

}

startServer();

