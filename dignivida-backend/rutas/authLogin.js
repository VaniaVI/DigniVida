import { Voluntario, Beneficiario } from '../model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar en voluntarios
    let usuario = await Voluntario.findOne({ email });
    let rol = "voluntario";

    // Si no es voluntario, buscar en beneficiarios
    if (!usuario) {
      usuario = await Beneficiario.findOne({ email });
      rol = "beneficiario";
    }

    // Si no se encontró en ninguno
    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    // Verificar contraseña
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    // Generar token
    const token = jwt.sign(
      { id: usuario._id, rol },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '1d' }
    );

    res.json({ token, rol }); // 🔥 Importante: enviar el rol
  } catch (err) {
    console.error('❌ Error en login:', err);
    res.status(500).json({ mensaje: 'Error en login' });
  }
};
