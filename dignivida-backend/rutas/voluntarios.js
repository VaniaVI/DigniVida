const express = require('express');
const router = express.Router();
const multer = require('multer');
const voluntarioController = require('../controller/voluntarioController');

// Configuración multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Carpeta donde se guarda la imagen
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName); // Nombre único
  }
});

const upload = multer({ storage });

// 👉 Usamos multer en la ruta y luego enviamos al controller
router.post('/', upload.single('imagen_dni'), voluntarioController.createVoluntario);
router.get('/', voluntarioController.getVoluntarios);
router.put('/:id', voluntarioController.updateVoluntario);
router.delete('/:id', voluntarioController.deleteVoluntario);

module.exports = router;
