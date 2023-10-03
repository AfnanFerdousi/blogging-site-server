import express from "express";
import cors from "cors";
import httpStatus from "http-status";

const app = express(); r

// user the middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1", router);
app.get(env)

app.get("/", (req, res) => {
    res.send("Server is running! You can stay assured");
})

app.use((req, res) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Route not found",
        errorMessages: [
            {
                path: "",
                message: "API Not found"
            }
        ]
    })
})

export default app;