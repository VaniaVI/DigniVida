import express from 'express';
import multer from 'multer';
import {
  createVoluntario,
  getVoluntarios,
  updateVoluntario,
  deleteVoluntario
} from '../controller/voluntarioController.js';

const router = express.Router();

// Configuración de almacenamiento con multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Ruta POST: Registro de voluntario con imagen
router.post('/', upload.single('documento'), createVoluntario);

// Otras rutas CRUD
router.get('/', getVoluntarios);
router.put('/:id', updateVoluntario);
router.delete('/:id', deleteVoluntario);

export default router;
