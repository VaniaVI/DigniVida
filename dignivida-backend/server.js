const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Cargar variables de entorno
dotenv.config();

// Crear app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Servir carpeta de imágenes
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
const voluntariosRoutes = require('./rutas/voluntarios');
const beneficiariosRoutes = require('./rutas/beneficiario');

app.use('/api/voluntarios', voluntariosRoutes);
app.use('/api/beneficiarios', beneficiariosRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(3001, () => console.log('🚀 Backend corriendo en http://localhost:3001'));
})
.catch((err) => {
  console.error('❌ Error al conectar a MongoDB:', err.message);
});
