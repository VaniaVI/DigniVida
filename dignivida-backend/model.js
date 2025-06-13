const mongoose = require('mongoose');
const { Schema } = mongoose;

const baseUserSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefono: String
}, { discriminatorKey: 'rol', timestamps: true });

const User = mongoose.model('User', baseUserSchema);

const voluntarioSchema = new Schema({
  experiencia: String,
  zonas: [String]
});

const Voluntario = User.discriminator('voluntario', voluntarioSchema);

const beneficiarioSchema = new Schema({
  direccion: String,
  necesidad: String
});

const Beneficiario = User.discriminator('beneficiario', beneficiarioSchema);

module.exports = { User, Voluntario, Beneficiario };
