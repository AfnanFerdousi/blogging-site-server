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

const likeBlogService = async (blogId) => {
    const updatedBlog = await Blog.findByIdAndUpdate(
        blogId,
        { $inc: { likes: 1 } },
        { new: true }
    );

    if (!updatedBlog) {
        throw new Error("Blog not found");
    }

    return updatedBlog;
};


export default {
    createBlogService,
    getBlogService,
    getSingleBlogService,
    likeBlogService
};
