const { Voluntario } = require('../modelos/usuario');

// GET - todos los voluntarios
exports.getVoluntarios = async (req, res) => {
  try {
    const data = await Voluntario.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST - crear voluntario
exports.createVoluntario = async (req, res) => {
  try {
    const nuevo = await Voluntario.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT - actualizar voluntario
exports.updateVoluntario = async (req, res) => {
  try {
    const actualizado = await Voluntario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE - eliminar voluntario
exports.deleteVoluntario = async (req, res) => {
  try {
    await Voluntario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Voluntario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
