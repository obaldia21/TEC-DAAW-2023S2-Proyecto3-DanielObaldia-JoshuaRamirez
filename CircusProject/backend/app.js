
// --- Importar express ----
import express,{urlencoded} from "express";
import cors from "cors";

// importar dotenv
import dotenv from "dotenv";

// importar conexión a la base de datos
import { connectDB } from "./config/database.js";

// importar rutas
import router from "./routes/routes.js";


// --- Crear servidor express ---
const app = express();

// Configuración inicial

dotenv.config();

app.use(cors());
app.use(urlencoded({extended: true}));
app.use(express.json());


// Configuración de endpoints

app.use('/api/users', router);

app.use('/api/events', router);

app.use('/api/orders', router);


// --- Configurar el servidor para recibir JSON ---
const PORT = process.env.PORT


// --- Llamar a la base de datos ---

const MongoURI = process.env.MONGO_URI;

app.get('/', (req, res) => {
    res.send('Hello World! This is the Circus Project');
})


// Iniciar el servidor y conectar a la base de datos

const startServer = async () => {

    try{
        await connectDB(MongoURI);
        console.log("Connected to DB", MongoURI);
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

    } catch(error) {
        console.log(error);
    }

}

startServer();

