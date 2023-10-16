import express from "express";
import userController from "./user.controller.js";
import auth from "../../middleware/auth.js";
import validateRequest from "../../middleware/validateRequest.js";
import { loginValidation, signupValidation } from "./user.validation.js";

const router = express.Router();

router.post("/signup",validateRequest(signupValidation), userController.createUser);
router.post("/login", validateRequest(loginValidation), userController.loginUser);
router.get("/", userController.getUsers);
router.get("/:email", userController.getSpecificUser);

export default router;