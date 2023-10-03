import userService from "./user.service.js";

const createUser = async (req, res) => {
    const userData = req.body;
    const user = await userService.CreateUserService(userData);

    res.status(201).json({
        status: "success",
        data: user
    })
}

const getUsers = async (req, res) => {
}

export default {
    createUser,
    getUsers
}