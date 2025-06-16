// controller/voluntarioController.js
const { Voluntario } = require('../model');

// Crear voluntario
const createVoluntario = async (req, res) => {
  try {
    // Verifica si llegó el archivo
    if (!req.file) {
      return res.status(400).json({ error: "No se recibió el archivo imagen_dni" });
    }

    const voluntario = await Voluntario.create({
      ...req.body,
      imagen_dni: req.file.filename // Ya seguro que req.file existe
    });

    res.status(201).json(voluntario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Obtener todos
const getVoluntarios = async (req, res) => {
  try {
    const voluntarios = await Voluntario.find();
    res.json(voluntarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar
const updateVoluntario = async (req, res) => {
  try {
    const actualizado = await Voluntario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar
const deleteVoluntario = async (req, res) => {
  try {
    await Voluntario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Voluntario eliminado' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createVoluntario,
  getVoluntarios,
  updateVoluntario,
  deleteVoluntario
};
