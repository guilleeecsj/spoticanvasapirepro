import express from 'express';
import axios from 'axios';
import canvasRoutes from './routes/canvasRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors'; // 1. Importamos el middleware cors

dotenv.config();
const app = express();
// const PORT = 3000; // No necesitas PORT en Vercel

// --- Configuración de CORS ---
// 2. Usamos el middleware. 
// Esto debe ir ANTES de que definas tus rutas.
// Tu app.use(cors()) funcionará perfecto en Vercel.
app.use(cors());

/*
// Opción B: Configuración más específica para producción (más seguro)
// Reemplaza 'http://tu-frontend.com' con el dominio de tu app frontend
const corsOptions = {
  origin: 'http://tu-frontend.com' 
};
app.use(cors(corsOptions));
*/
// ----------------------------


// Middleware para entender JSON (probablemente lo necesites para tus rutas de API)
app.use(express.json());

// Tus rutas
app.use('/api/canvas', canvasRoutes);

// ESTO ES LO IMPORTANTE PARA VERCEL:
// En lugar de app.listen, exportamos la app.
// Vercel se encargará de tomar esta 'app' y manejar las solicitudes.
export default app;

/*
// app.listen() SE ELIMINA. Vercel maneja esto automáticamente.
app.listen(PORT, function () {
    console.log("Listening on PORT: ", PORT);
    if (PORT == 3000) { 
      console.log('Running on local: http://localhost:3000');
    }
});
*/

