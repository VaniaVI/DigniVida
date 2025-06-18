import express from 'express';
import beneficiarioController from '../controller/beneficiarioController.js';

const router = express.Router();

// Rutas CRUD
router.get('/', beneficiarioController.getBeneficiarios);
router.post('/', beneficiarioController.createBeneficiario);
router.put('/:id', beneficiarioController.updateBeneficiario);
router.delete('/:id', beneficiarioController.deleteBeneficiario);

export default router;
