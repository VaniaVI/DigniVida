import express from 'express';
import {
  loginVoluntario,
  authMiddleware,
  getUserProfile
} from '../controller/authController.js';

const router = express.Router();

// Ruta para login
router.post('/login', loginVoluntario);
router.get('/me', authMiddleware, getUserProfile);

export default router;
