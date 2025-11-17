import express from 'express';
import { signup, login, loguot } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', loguot);

export default router;
