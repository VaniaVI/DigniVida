import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Voluntario } from '../model.js';

// 🟢 LOGIN
export const loginVoluntario = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("👉 Email recibido:", email);
    console.log("👉 Password recibido:", password);

    const voluntario = await Voluntario.findOne({ email });
    if (!voluntario) {
      console.log("❌ Correo no encontrado");
      return res.status(401).json({ error: 'Correo no registrado' });
    }

    console.log("✅ Voluntario encontrado:", voluntario);

    const validPassword = await bcrypt.compare(password, voluntario.password);
    if (!validPassword) {
      console.log("❌ Contraseña incorrecta");
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: voluntario._id, rol: voluntario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    console.log("✅ Login exitoso, token generado");

    res.json({ token,
      rol: voluntario.rol 
     });

  } catch (error) {
    console.error("🔥 Error inesperado en login:", error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

// 🛡️ MIDDLEWARE para proteger rutas
export const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: 'Token requerido' });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

// 🔐 Obtener perfil del usuario
export const getUserProfile = async (req, res) => {
  try {
    const user = await Voluntario.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'No se pudo obtener el perfil' });
  }
};
