import { Router } from "express";
import { login, register } from "../controllers/authController.js";
import { body, validationResult } from "express-validator";
const router = Router();

router.post(
	"/signUp",
	[
		body("email").isEmail().withMessage("invalid email"),
		body("name").notEmpty().withMessage("name is required"),
		body("password")
			.isLength({ min: 8 })
			.withMessage("password should be 8 characters or more"),
	],
	register
);
router.post(
	"/login",
	[
		body("email").isEmail().withMessage("invalid email"),
		body("password").notEmpty().withMessage("password is required"),
	],
	login
);
export default router;
