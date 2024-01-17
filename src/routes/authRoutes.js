import express from 'express';
import { loginWithGoogle, googleCallback } from '../controllers/authController.js';

const router = express.Router();

router.get('/google', loginWithGoogle);
router.get('/google/callback', googleCallback);

export default router;

