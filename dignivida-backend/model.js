const mongoose = require('mongoose');
const { Schema } = mongoose;

const baseUserSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  region: { type: String, required: true},
  comuna: { type: String, required: true},
  edad: { type: String, required: true},
  telefono: String
}, { discriminatorKey: 'rol', timestamps: true });

const User = mongoose.model('User', baseUserSchema);

// schema de voluntario
const voluntarioSchema = new Schema({
  experiencia: String,
  zonas: [String]
});

const Voluntario = User.discriminator('voluntario', voluntarioSchema);

// schema de beneficiario
const beneficiarioSchema = new Schema({
  
  necesidad: String
});

const Beneficiario = User.discriminator('beneficiario', beneficiarioSchema);

module.exports = { User, Voluntario, Beneficiario };
