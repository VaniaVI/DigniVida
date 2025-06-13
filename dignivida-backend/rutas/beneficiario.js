const express = require('express');
const router = express.Router();
const beneficiarioController = require('../controller/beneficiarioController');

// Rutas CRUD
router.get('/', beneficiarioController.getBeneficiarios);
router.post('/', beneficiarioController.createBeneficiario);
router.put('/:id', beneficiarioController.updateBeneficiario);
router.delete('/:id', beneficiarioController.deleteBeneficiario);

module.exports = router;
