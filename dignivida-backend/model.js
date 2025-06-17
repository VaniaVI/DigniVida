import mongoose from 'mongoose';

const { Schema } = mongoose;

// 🧩 Esquema base
const baseUserSchema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  telefono: { type: String, required: true },
  edad: { type: Number, required: true },
  region: { type: String, required: true },
  comuna: { type: String, required: true },
}, { discriminatorKey: 'rol', timestamps: true });

const User = mongoose.model('User', baseUserSchema);

// 🧩 Voluntario
const voluntarioSchema = new Schema({
  imagen_dni: { type: String, required: true }
});
const Voluntario = User.discriminator('voluntario', voluntarioSchema);

// 🧩 Beneficiario
const beneficiarioSchema = new Schema({
  sexo: { type: String },
  discapacidad: { type: String, required: true },
  descripcion: { type: String }
});
const Beneficiario = User.discriminator('beneficiario', beneficiarioSchema);

// ✅ Exportar
export { User, Voluntario, Beneficiario };
