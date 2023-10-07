import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    writtenBlogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        default: []
    }],
    sharedBlogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        default: []
    }],
    profileImg: {
        type: String,
        required: true
    },
    role: {
        type: String, 
        enum: ["admin", "user"], 
        required: true,
        default: "user" 
    },
    gems: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true,
        versionKey: false
    }
)

const User = mongoose.model("User", userSchema);

export default User;