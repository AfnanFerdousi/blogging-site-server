import userService from "./user.service.js";

const createUser = async (req, res) => {
    const userData = req.body;
    const user = await userService.CreateUserService(userData);

    res.status(201).json({
        status: "success",
        data: user
    })
}

const loginUser = async (req, res) => {
    const loginData = req.body;
    const result = await userService.loginUserService(loginData);

    res.status(200).json({
        status: "success",
        data: result
    })
}

const getUsers = async (req, res) => {
    const userData = req.user;
    const {searchText} = req.query;
    const users = await userService.getUsersService(userData, searchText);

    res.status(200).json({
        status: "success",
        data: users
    })
    
}

const getSpecificUser = async (req, res) => {
    const userId = req.params.id;

    const user = await userService.getSpecificUserService(userId);

    res.status(200).json({
        status: "success",
        data: user
    })
}

export default {
    createUser,
    loginUser,
    getUsers,
    getSpecificUser
}