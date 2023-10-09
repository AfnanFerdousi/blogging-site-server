import express from "express";
import auth from "../../middleware/auth.js";
import blogController from "./blog.controller.js";

const router = express.Router();

router.post("/create-blog", auth("admin", "user"), blogController.createBlog);
router.get("/", blogController.getBlogs);
router.get("/:id", auth("admin", "user"), blogController.getSingleBlog);
router.post("/:id/post-comment", auth("admin", "user"), blogController.likeBlog);

export default router;