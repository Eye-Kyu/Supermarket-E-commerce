import express from "express";
import { signup, logout, login } from '../controllers/auth.controller';

const router = express.Router();

router.get("login", login);
router.get("signup", signup);
router.get("logout", logout);

export default router;