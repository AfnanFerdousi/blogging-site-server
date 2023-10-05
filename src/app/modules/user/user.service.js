import { createToken } from "../../../helpers/jwtHelpers.js";
import User from "./user.model.js";

const CreateUserService = async (userData) => {
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
        throw new Error("Email is already in use.");
    }
    const newUser = await User.create(userData);


    return newUser;
}

const loginUserService = async (loginData) => {
    const user = await User.findOne({ email: loginData.email });
    if (!user) {
        throw new Error("User does not exist");
    }
    if(user.password !== loginData.password) {
        throw new Error("Incorrect password");
    }

    const { email, role } = user;
    const accessToken = createToken({ email, role }, process.env.JWT_SECRET, "1h");

    return {
        accessToken
    }

}

const getUsersService = async (userData) => {
    console.log(userData)
    if(userData.role !== "admin") {
     return "Unauthorized access"
    }
    const users = await User.find();
    return users
}


const getSpecificUserService = async (userId, userData) => {
    if (userData.role === "admin") {
        const user = await User.findOne({ _id: userId });
       return user;
    }
    if(userData.role === "user") {
        const user = await User.findOne({ _id: userId });
        if(user.email !== userData.email) {
            return "Unauthorized access"
        }
        return user;
    }

    return "Unauthorized access"
}

export default {
    CreateUserService,
    loginUserService,
    getUsersService,
    getSpecificUserService
}
