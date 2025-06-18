import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import voluntariosRoutes from './rutas/voluntarios.js';
import beneficiariosRoutes from './rutas/beneficiario.js';
import authRoutes from './rutas/auth.js'; 

dotenv.config();

const app = express();

// Fix __dirname con ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// Servir imágenes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Usar rutas (✅ asegúrate que están importadas bien y usan `export default`)
app.use('/api/voluntarios', voluntariosRoutes);
app.use('/api/beneficiarios', beneficiariosRoutes);
app.use('/api/auth', authRoutes); // solo si creaste login

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(3001, () => console.log('🚀 Servidor corriendo en http://localhost:3001'));
})
.catch((err) => {
  console.error('❌ Error al conectar a MongoDB:', err.message);
});
