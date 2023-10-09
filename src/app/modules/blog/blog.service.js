import Blog from "./blog.model.js";

const createBlogService = async (userData, blogData) => {
    if (!userData) {
        throw new Error("Unauthorized");
    }
    const newBlog = await Blog.create(blogData);
    return newBlog;
}

const getBlogService = async (searchText, limit) => {
    let query = {};

    if (searchText) {
        query.$or = [
            { title: { $regex: searchText, $options: "i" } },
            { content: { $regex: searchText, $options: "i" } }
        ];
    }

    const blogs = await Blog.find(query)
        .limit(limit)
        .populate('comments');

    return blogs;
}

const getSingleBlogService = async (blogId) => {
    const blog = await Blog.findById(blogId)
        .populate('comments')
        .exec();


    return blog;
}

const likeBlogService = async (blogId, userData) => {
    const blog = await Blog.findById(blogId);

    if (!blog) {
        throw new Error("Blog not found");
    }

    const emailIndex = blog.likes.findIndex((like) => like.email === userData.email);

    if (emailIndex === -1) {
        // Email doesn't exist in the likes array, so add it
        blog.likes.push({ email: userData.email, name: userData.name });
    } else {
        // Email exists in the likes array, so remove it
        blog.likes.splice(emailIndex, 1);
    }

    const updatedBlog = await blog.save();

    return updatedBlog;
};



export default {
    createBlogService,
    getBlogService,
    getSingleBlogService,
    likeBlogService
};
