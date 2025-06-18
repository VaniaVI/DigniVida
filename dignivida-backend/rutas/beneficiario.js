import express from 'express';
import {
  getBeneficiarios,
  createBeneficiario,
  updateBeneficiario,
  deleteBeneficiario
} from '../controller/beneficiarioController.js';

const router = express.Router();

// Rutas CRUD
router.get('/', getBeneficiarios);
router.post('/', createBeneficiario);
router.put('/:id', updateBeneficiario);
router.delete('/:id', deleteBeneficiario);

export default router;
