import express from "express";
import userRoutes from "../modules/user/user.route.js"
import blogRoutes from "../modules/blog/blog.route.js"
import commentRoutes from "../modules/comment/comment.route.js"

const router = express.Router();

const moduleRoutes = [
    {
        path: "/user",
        route: userRoutes
    }, 
    {
        path: "/blog",
        route: blogRoutes
    }, 
    {
        path: "/comment",
        route: commentRoutes
    }
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
})

export default router;