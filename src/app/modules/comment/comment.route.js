import express from "express"
import auth from "../../middleware/auth.js";
import commentController from "./comment.controller.js";

const router = express.Router()

router.post("/post-comment", auth("admin", "user"), commentController.postComment)

export default router;