import Blog from "./blog.model.js";

const CreateBlogService = async (userData, blogData) => {
    if (!userData) {
        throw new Error("Unauthorized");
    }
    const newBlog = await Blog.create(blogData);
    return newBlog;
}

const GetBlogService = async (searchText, limit) => {
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

const GetSingleBlogService = async (blogId) => {
    const blog = await Blog.findById(blogId)
        .populate('comments')
        .exec();


    return blog;
}

const likeBlogService = async (blogId) => {
    // Find the blog by its ID and update the likes count
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
    CreateBlogService,
    GetBlogService,
    GetSingleBlogService,
    likeBlogService
};
