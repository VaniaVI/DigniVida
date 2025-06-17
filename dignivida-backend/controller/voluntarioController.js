import { Voluntario } from '../model.js';
import bcrypt from 'bcrypt';

// 📌 Crear voluntario
export const createVoluntario = async (req, res) => {
  try {
    const {
      nombre,
      email,
      password,
      telefono,
      edad,
      region,
      comuna
    } = req.body;

    if (!nombre || !email || !password || !telefono || !edad || !region || !comuna) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "Debes subir una imagen del DNI" });
    }

    const voluntarioExistente = await Voluntario.findOne({ email });
    if (voluntarioExistente) {
      return res.status(400).json({ error: "Este correo ya está registrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoVoluntario = new Voluntario({
      nombre,
      email,
      password: hashedPassword,
      telefono,
      edad,
      region,
      comuna,
      imagen_dni: req.file.filename
    });

    await nuevoVoluntario.save();

    res.status(201).json({
      mensaje: "Voluntario registrado exitosamente",
      voluntario: {
        id: nuevoVoluntario._id,
        nombre: nuevoVoluntario.nombre,
        email: nuevoVoluntario.email,
        region: nuevoVoluntario.region,
        comuna: nuevoVoluntario.comuna
      }
    });

  } catch (error) {
    console.error("❌ Error al registrar voluntario:", error);
    res.status(500).json({ error: "Error interno del servidor al registrar voluntario" });
  }
};

// 📌 Obtener todos los voluntarios
export const getVoluntarios = async (req, res) => {
  try {
    const voluntarios = await Voluntario.find();
    res.json(voluntarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener voluntarios" });
  }
};

// 📌 Actualizar voluntario
export const updateVoluntario = async (req, res) => {
  try {
    const voluntarioActualizado = await Voluntario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ mensaje: "Voluntario actualizado", voluntario: voluntarioActualizado });
  } catch (error) {
    res.status(400).json({ error: "No se pudo actualizar el voluntario" });
  }
};

// 📌 Eliminar voluntario
export const deleteVoluntario = async (req, res) => {
  try {
    await Voluntario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Voluntario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: "No se pudo eliminar el voluntario" });
  }
};
