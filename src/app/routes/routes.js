import express from "express";

const router = express.Router();

const moduleRoutes = [
    {
        path: "",
        route: ""
    },
    {
        path: "/blogs",
        route: ""
    }
]

moduleRoutes.forEach(route => {
    router.use(route.path, route.route);
})

export default router;