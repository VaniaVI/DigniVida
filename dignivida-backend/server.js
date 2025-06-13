const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const voluntariosRoutes = require('./rutas/voluntarios');
app.use('/api/voluntarios', voluntariosRoutes);

const beneficiariosRoutes = require('./rutas/beneficiario');
app.use('/api/beneficiarios', beneficiariosRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ Conectado a MongoDB');
  app.listen(3001, () => console.log('🚀 Backend en http://localhost:3001'));
})
.catch(err => console.error('❌ Error en MongoDB:', err));
