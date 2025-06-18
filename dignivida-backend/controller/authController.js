import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Voluntario, Beneficiario } from '../model.js';

// 🔐 LOGIN GENERAL (ambos roles)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("👉 Email recibido:", email);

    // Buscar en voluntarios
    let usuario = await Voluntario.findOne({ email });
    let rol = "voluntario";

    // Si no lo encuentra, buscar en beneficiarios
    if (!usuario) {
      usuario = await Beneficiario.findOne({ email });
      rol = "beneficiario";
    }

    if (!usuario) {
      console.log("❌ Usuario no encontrado");
      return res.status(401).json({ error: 'Correo no registrado' });
    }

    console.log(`✅ ${rol} encontrado:`, usuario);

    const validPassword = await bcrypt.compare(password, usuario.password);
    if (!validPassword) {
      console.log("❌ Contraseña incorrecta");
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario._id, rol },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '1d' }
    );

    console.log("✅ Login exitoso, token generado");

    res.json({ token, rol });
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
