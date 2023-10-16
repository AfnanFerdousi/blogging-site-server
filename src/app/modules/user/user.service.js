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
    if (user.password !== loginData.password) {
        console.log("Incorrect password");
    }

    const { email, role, _id } = user;
    const accessToken = createToken({ email, role }, process.env.JWT_SECRET, "1h");

    return {
        accessToken,
        _id
    }

}

const getUsersService = async (userData, searchText) => {
    let query = {};

    if (searchText) {
        // Case-insensitive search for name or email without regex
        query.$or = [
            { name: { $regex: searchText, $options: "i" } },
            { email: { $regex: searchText, $options: "i" } }
        ];
    }

    const users = await User.find(query)
        .select("-password")
        .populate("writtenBlogs")
        .populate("sharedBlogs")
        .exec();
    
    return users;
}


const getSpecificUserService = async (email) => {
    const user = await User.findOne({ email: email })
        .select("-password")
        .populate("writtenBlogs")
        .populate("sharedBlogs")
        .exec();
    
    return user;
}

export default {
    CreateUserService,
    loginUserService,
    getUsersService,
    getSpecificUserService
}
