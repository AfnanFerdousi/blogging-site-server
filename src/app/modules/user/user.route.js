import express from "express";
import userController from "./user.controller.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/",auth("admin"), userController.getUsers);
router.get("/:id",auth("admin", "user"), userController.getSpecificUser);

export default router;