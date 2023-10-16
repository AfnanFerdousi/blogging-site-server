import express from "express";
import auth from "../../middleware/auth.js";
import blogController from "./blog.controller.js";

const router = express.Router();

router.post("/create-blog", auth("admin", "user"), blogController.createBlog);
router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getSingleBlog);
router.post("/like/:id", auth("admin", "user"), blogController.likeBlog);
router.post("/share/:id", auth("admin", "user"), blogController.shareBlog);

export default router;