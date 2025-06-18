import { Beneficiario } from '../model.js';
import bcrypt from 'bcrypt';

// 📌 Crear beneficiario
export const createBeneficiario = async (req, res) => {
  try {
    const {
      nombre,
      email,
      password,
      telefono,
      edad,
      region,
      comuna,
      sexo,
      discapacidad,
      descripcionDiscapacidad,
      terminos
    } = req.body;

    console.log("📥 Backend recibió:", req.body);

    // Validación básica
    if (
      !nombre || !email || !password || !telefono || !edad ||
      !region || !comuna || !sexo || !discapacidad || !terminos
    ) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    // Validación si indicó que tiene discapacidad pero no dio descripción
    if (discapacidad === "Y" && !descripcionDiscapacidad) {
      return res.status(400).json({ error: "Debes describir tu condición especial" });
    }

    // Validar si ya existe el beneficiario
    const beneficiarioExistente = await Beneficiario.findOne({ email });
    if (beneficiarioExistente) {
      return res.status(400).json({ error: "Este correo ya está registrado" });
    }

    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo beneficiario
    const nuevoBeneficiario = new Beneficiario({
      nombre,
      email,
      password: hashedPassword,
      telefono,
      edad,
      region,
      comuna,
      sexo,
      discapacidad,
      descripcionDiscapacidad: discapacidad === "Y" ? descripcionDiscapacidad : "",
      terminos
    });

    await nuevoBeneficiario.save();

    res.status(201).json({
      mensaje: "Beneficiario registrado exitosamente",
      beneficiario: {
        id: nuevoBeneficiario._id,
        nombre: nuevoBeneficiario.nombre,
        email: nuevoBeneficiario.email,
        region: nuevoBeneficiario.region,
        comuna: nuevoBeneficiario.comuna
      }
    });

  } catch (error) {
    console.error("❌ Error al registrar beneficiario:", error);
    res.status(500).json({ error: "Error interno del servidor al registrar beneficiario" });
  }
};

// 📌 Obtener todos los beneficiarios
export const getBeneficiarios = async (req, res) => {
  try {
    const beneficiarios = await Beneficiario.find();
    res.json(beneficiarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener beneficiarios" });
  }
};

// 📌 Actualizar beneficiario
export const updateBeneficiario = async (req, res) => {
  try {
    const beneficiarioActualizado = await Beneficiario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json({ mensaje: "Beneficiario actualizado", beneficiario: beneficiarioActualizado });
  } catch (error) {
    res.status(400).json({ error: "No se pudo actualizar el beneficiario" });
  }
};

// 📌 Eliminar beneficiario
export const deleteBeneficiario = async (req, res) => {
  try {
    await Beneficiario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "Beneficiario eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: "No se pudo eliminar el beneficiario" });
  }
};

export default {
  createBeneficiario,
  getBeneficiarios,
  updateBeneficiario,
  deleteBeneficiario
};
