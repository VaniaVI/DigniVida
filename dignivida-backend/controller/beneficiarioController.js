const { Beneficiario } = require('../modelos/usuario');

// GET - listar todos los beneficiarios
exports.getBeneficiarios = async (req, res) => {
  try {
    const data = await Beneficiario.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST - crear beneficiario
exports.createBeneficiario = async (req, res) => {
  try {
    const nuevo = await Beneficiario.create(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUT - actualizar beneficiario
exports.updateBeneficiario = async (req, res) => {
  try {
    const actualizado = await Beneficiario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE - eliminar beneficiario
exports.deleteBeneficiario = async (req, res) => {
  try {
    await Beneficiario.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Beneficiario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
