import { Voluntario } from '../model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginVoluntario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const voluntario = await Voluntario.findOne({ email });
    if (!voluntario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const passwordValida = await bcrypt.compare(password, voluntario.password);
    if (!passwordValida) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: voluntario._id },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '1d' }
    );

    res.json({ token });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ mensaje: 'Error en login' });
  }
};

export { loginVoluntario, authMiddleware, getUserProfile };