import express from 'express';
import { signup, login, loguot } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/signup', signup);
router.get('/login', login);
router.get('/logout', loguot);

export default router;
