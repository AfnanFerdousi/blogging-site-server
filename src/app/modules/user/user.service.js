import User from "./user.model.js";

const CreateUserService = async (userData) => {
    const user = await User.create(userData);

    console.log(user)

    return user;
}


export default {
    CreateUserService
}