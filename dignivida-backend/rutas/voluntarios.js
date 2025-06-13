const express = require('express');
const router = express.Router();
const voluntarioController = require('../controller/voluntarioController');

// Rutas CRUD
router.get('/', voluntarioController.getVoluntarios);
router.post('/', voluntarioController.createVoluntario);
router.put('/:id', voluntarioController.updateVoluntario);
router.delete('/:id', voluntarioController.deleteVoluntario);

module.exports = router;
