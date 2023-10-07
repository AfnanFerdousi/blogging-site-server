import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    tags: [{
        type: String,
        required: true,
        default: []
    }],
    image: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0
    },
    shares: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: []
    }],
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: []
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    versionKey: false
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
