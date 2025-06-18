import express from 'express';
import { login, authMiddleware, getUserProfile } from '../controller/authController.js';

const router = express.Router();

router.post('/login', login); // para beneficiario y voluntario
router.get('/me', authMiddleware, getUserProfile); // retorna perfil según token

export default router;
