import express from "express";
import JoiValidator from 'express-joi-validation'
import { login, register } from "../controllers/authController.js";
import { registerSchema, loginSchema } from "../utils/validators.js";

const validator = JoiValidator.createValidator({})
const router = express.Router();

router.post("/register", validator.body(registerSchema), register);
router.post("/login",  validator.body(loginSchema), login);

export default router;